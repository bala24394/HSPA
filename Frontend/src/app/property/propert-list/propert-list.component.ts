import { IProperty } from './../IProperty.interface';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css'],
})
export class PropertListComponent implements OnInit {
  properties: Array<IProperty>;

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {this.properties=data},
      error => console.log(error)
    );
    // this.http.get('data/properties.json').subscribe(
    //   data => {this.properties=data}
    // );
  }
}
