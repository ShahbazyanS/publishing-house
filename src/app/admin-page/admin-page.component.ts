import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "@app/model/user";
import {UserService} from "@app/services/user.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  user: User = new User()
  id: number;

  constructor(private routerActivate: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.id = this.routerActivate.snapshot.params['id']
  }

  getUser(){
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user = data;
    })
  }
}
