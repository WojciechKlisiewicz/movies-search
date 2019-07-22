import { IMovie } from '../interfaces/movie.interface';

export class Movie {
    public title: string;
    public year: number;
    public id: string;
    public poster: string;
    public plot: string;

    constructor(data: IMovie) {
        this.fillDataFromServer(data);
    }

    public fillDataFromServer(data: IMovie) {
        this.title = data.Title;
        this.year = data.Year;
        this.id = data.imdbID;
        this.poster = data.Poster;
        this.plot = data.Plot;
    }
}
