import { IProperty } from './../IProperty.interface';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css'],
})
export class PropertListComponent implements OnInit {
  properties: Array<IProperty>;

  SellRent = 1;
  constructor(private route:ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
if(this.route.snapshot.url.toString()){
  this.SellRent = 2;
}

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {this.properties=data;
      console.log(this.route.snapshot.url.toString());
      },
      error => console.log(error)
    );
    // this.http.get('data/properties.json').subscribe(
    //   data => {this.properties=data}
    // );
  }
}
