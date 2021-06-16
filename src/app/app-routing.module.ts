import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'register', component: AddUserComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
