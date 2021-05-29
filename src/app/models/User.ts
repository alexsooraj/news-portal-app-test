import { Article } from "./Article";

export interface User {
    name: string;
    password: string;
    email: string;
    favourites: Article[];
}