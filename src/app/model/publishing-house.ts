import {Contact} from "./contact";
import {User} from "./user";
import {Book} from "./book";

export class PublishingHouse{
  id: number;
  name: string;
  contact: Contact;
  users: User[];
  books: Book[];

}
