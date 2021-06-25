import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {BookComponent} from "./book/book.component";
import {PubHouseComponent} from "./pub-house/pub-house.component";
import {AdminPageComponent} from "@app/admin-page/admin-page.component";
import {UpdatPubHouseComponent} from "@app/updat-pub-house/updat-pub-house.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'register', component: AddUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/:id', component: AdminPageComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'publishing_house/:id', component: PubHouseComponent},
  {path: 'update_publishing_house/:id', component: UpdatPubHouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
