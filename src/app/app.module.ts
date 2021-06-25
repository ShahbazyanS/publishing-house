import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddUserComponent} from './add-user/add-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PubHouseComponent } from './pub-house/pub-house.component';
import { AddBookComponent } from './add-book/add-book.component';
import {CheckBoxModule} from "@syncfusion/ej2-angular-buttons";
import { AddAuthorComponent } from './add-author/add-author.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddPubHouseComponent } from './add-pub-house/add-pub-house.component';
import { ContactComponent } from './contact/contact.component';
import { PubHousesComponent } from './pub-houses/pub-houses.component';
import { UpdatPubHouseComponent } from './updat-pub-house/updat-pub-house.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    UserPageComponent,
    HomeComponent,
    BookComponent,
    PubHouseComponent,
    AddBookComponent,
    AddAuthorComponent,
    AdminPageComponent,
    AddPubHouseComponent,
    ContactComponent,
    PubHousesComponent,
    UpdatPubHouseComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
