import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatInputModule, MatButtonModule } from '@angular/material';

import { SearchMovieComponent } from './search-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchMovieComponent
    ],
    exports: [
        SearchMovieComponent
    ],
    imports: [
        BrowserModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})

export class SearchMovieModule { }
