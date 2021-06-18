import {Book} from "./book";
import {Gender} from "./gender";

export class Author{
  id: number;
  name: string;
  surname: string;
  gender: Gender;
  bio: string;
  books: Book[];
}
