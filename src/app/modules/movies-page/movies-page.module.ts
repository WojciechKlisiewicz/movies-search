import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MoviesPageComponent } from './movies-page.component';
import { SearchMovieModule } from '../search-movie/search-movie.module';
import { MovieDetaislModule } from '../movie-details/movie-details.module';

@NgModule({
    declarations: [
        MoviesPageComponent
    ],
    exports: [
        MoviesPageComponent
    ],
    imports: [
        BrowserModule,
        SearchMovieModule,
        MovieDetaislModule
    ],
    providers: [],
})

export class MoviesPageModule { }
