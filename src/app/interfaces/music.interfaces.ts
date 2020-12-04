export interface Group {
    id: number;
    name: string;
    discs: Array<Disc>;
    favorite: boolean;
}

export interface Disc {
    name: string;
    image: string;
    year: number;
    songs: Array<string>;
}