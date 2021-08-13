import {Genre} from "./genre";
import {PublishingHouse} from "./publishing-house";
import {Author} from "./author";

export class Book{
  id: number;
  title: string;
  description: string;
  picUrl: string;
  genre: Genre;
  author: Author;
  publishingHouse: PublishingHouse;

}
