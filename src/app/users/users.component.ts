import { Component, OnInit } from '@angular/core';
import {UserService} from "@app/services/user.service";
import {User} from "@app/model/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.allUsers()
  }

  allUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users = data
    })
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data)
    })
  }
}
