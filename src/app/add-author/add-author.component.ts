import {Component, OnInit} from '@angular/core';
import {AuthorService} from "@app/services/author.service";
import {Author} from "@app/model/author";
import {Observable} from "rxjs";
import {Book} from "@app/model/book";
import {Gender} from "@app/model/gender";
import {Genre} from "@app/model/genre";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  author: Author = new Author();
  male: Gender.MALE
  female: Gender.FEMALE
  genders: any[] = [];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
    for (let gender in Gender) {
      if (!isNaN(Number(gender))) {
        this.genders.push({text: gender, value: Gender[gender]})
      }
    }
  }

  createAuthor() {
    this.authorService.addAuthor(this.author).subscribe(data => {
        console.log(data);
      },
      error => console.log(error))
  }
  onSubmit() {
    this.createAuthor()
  }
}
