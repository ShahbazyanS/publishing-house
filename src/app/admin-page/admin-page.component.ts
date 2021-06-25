import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  id: number;

  constructor(private routerActivate: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.id = this.routerActivate.snapshot.params['id']
  }

}
