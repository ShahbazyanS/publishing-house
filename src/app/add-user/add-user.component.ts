import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User()

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
        console.log(data);
      },
      error => console.log(error))
  }

  onSubmit() {
    console.log(this.user)
    this.saveUser()
    this.router.navigate(['/login'])
  }
}
