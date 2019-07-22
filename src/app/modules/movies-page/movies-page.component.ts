import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
    selector: 'app-movies-page',
    templateUrl: './movies-page.component.html',
    styleUrls: ['./movies-page.component.scss']
})

export class MoviesPageComponent {
    public activeMovie: Movie;

    public onSelectMovie(movie: Movie) {
        this.activeMovie = movie;
    }
}
