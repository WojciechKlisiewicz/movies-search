import { Component, OnChanges, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { API_KEY, SERVER_MOVIE_ENDPOINT } from 'src/app/constants/config.constant';
import { IMovie } from 'src/app/interfaces/movie.interface';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnChanges {
    @Input() movie: Movie;

    public isLoad = false;

    constructor(private http: HttpClient) {}

    public ngOnChanges() {
        if (!this.movie) {
            return;
        }

        this.isLoad = true;
        this.http.get<IMovie>(SERVER_MOVIE_ENDPOINT, {
            params: {
                i: this.movie.id,
                apikey: API_KEY
            }
        })
            .subscribe((data) => this.movie.fillDataFromServer(data))
            .add(() => this.isLoad = false);
    }
}
