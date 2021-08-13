import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {PubHouseService} from "../services/pub-house.service";
import {PublishingHouse} from "../model/publishing-house";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  id: number;
  user: User;

  constructor(private routerActivate: ActivatedRoute,private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.id = this.routerActivate.snapshot.params['id']
    this.userPage()
  }

  userPage(){
    this.id = this.routerActivate.snapshot.params['id']
    this.user = new User()
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    })
  }
}
