import {Component, Input, OnInit} from '@angular/core';
import {PubHouseService} from "@app/services/pub-house.service";
import {PublishingHouse} from "@app/model/publishing-house";
import {Router} from "@angular/router";
import {User} from "@app/model/user";

@Component({
  selector: 'app-pub-houses',
  templateUrl: './pub-houses.component.html',
  styleUrls: ['./pub-houses.component.css']
})
export class PubHousesComponent implements OnInit {

  pubHouses: PublishingHouse[];

  constructor(private router: Router, private pubHouseService: PubHouseService) {
  }

  ngOnInit(): void {

    this.publishingHouses()
  }

  publishingHouses() {
    this.pubHouseService.getAll().subscribe(data => {
      this.pubHouses = data;
    })
  }

  update(id: number) {
    this.router.navigate(['update_publishing_house', id])
  }

  delete(id: number) {
    this.pubHouseService.delete(id).subscribe(data=>{
      console.log(data)
    })
  }
  pubHousePage(id: number){
    this.router.navigate(['publishing_house', id]);
  }
}
