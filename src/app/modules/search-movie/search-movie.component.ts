import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { startWith, map, debounceTime, switchMap, catchError, tap } from 'rxjs/operators';
import { SERVER_MOVIE_ENDPOINT, API_KEY } from 'src/app/constants/config.constant';
import { IMovies } from 'src/app/interfaces/movies.interface';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.scss']
})

export class SearchMovieComponent implements OnInit {
    @Output() onselect = new EventEmitter();

    public autoComplete$: Observable<Movie> = null;
    public searchMovie = new FormControl();
    public yearOfRelease = new FormControl();
    public availableYears: number[] = [];
    public currentYear = new Date().getFullYear();
    private movies: Movie[] = [];

    constructor(private http: HttpClient) {
        this.generateAvailableYears();
    }

    public ngOnInit() {
        this.autoComplete$ = this.searchMovie.valueChanges.pipe(
            startWith(''),
            debounceTime(300),
            switchMap(value => value !== '' ? this.getMovies(value) : of(null))
        );

        this.yearOfRelease.valueChanges.pipe(
            tap(() => this.clearSearchMovie())
        ).subscribe();
    }

    public onSearchMovieSelect($event) {
        this.onselect.emit($event.option.value);
    }

    public clearForm() {
        this.yearOfRelease.setValue('');
        this.clearSearchMovie();
    }

    public clearSearchMovie() {
        this.searchMovie.setValue('');
        this.onselect.emit(null);
    }

    private generateAvailableYears() {
        for (let i = this.currentYear; i > 1900; i--) {
            this.availableYears.push(i);
        }
    }

    private getMovies(value: string) {
        if (!value || typeof value !== 'string') {
            return of(null);
        }

        const searchParams: { [key: string]: string } = {
            s: value.toLowerCase(),
            apikey: API_KEY
        };

        if (this.yearOfRelease.value) {
            searchParams.y = this.yearOfRelease.value;
        }

        return this.http.get<IMovies>(SERVER_MOVIE_ENDPOINT, {
            params: searchParams
        }).pipe(
            map((data) => data.Search ? data.Search.map((movie) => this.getMovie(movie)) : []),
            catchError(() => of(null))
        );
    }

    private getMovie(data: IMovie): Movie {
        const movie = this.movies.find((movieObject) => movieObject.id === data.imdbID);
        return movie || this.createMovie(data);
    }

    private createMovie(data: IMovie): Movie {
        const movieObject = new Movie(data);
        this.movies.push(movieObject);
        return movieObject;
    }

    public displayFunction(item: Movie): string {
        return item ? item.title : '';
    }
}
