import { IMovie } from './movie.interface';

export interface IMovies {
    Response: string;
    Search: IMovie[];
    totalResults: string;
}
