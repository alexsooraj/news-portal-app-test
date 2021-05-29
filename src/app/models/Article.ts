import { Multimedia } from "./Multimedia";

export interface Article {
    section: string;
    title: string;
    abstract: string;
    url: string;
    multimedia: Multimedia[];
}