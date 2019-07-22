export interface IMovie {
    Title?: string;
    Year?: number;
    Rated?: number;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Ratings?: { Source: string; Value: string }[];
    Metascore?: string;
    imdbRating?: number;
    imdbVotes?: number;
    imdbID?: string;
    Type?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Response?: boolean;
}
