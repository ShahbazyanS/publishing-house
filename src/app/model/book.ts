import {Genre} from "./genre";
import {PublishingHouse} from "./publishing-house";
import {Author} from "./author";

export class Book{
  id: number;
  title: string;
  description: string;
  picUrl: string;
  genre: Genre;
  publishingHouse: PublishingHouse;
  author: Author;

}
