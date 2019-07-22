import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
    declarations: [
        MovieDetailsComponent
    ],
    exports: [
        MovieDetailsComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})

export class MovieDetaislModule { }
