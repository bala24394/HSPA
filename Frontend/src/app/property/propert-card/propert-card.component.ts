import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-card',
  templateUrl: './propert-card.component.html',
  styleUrls: ['./propert-card.component.css']
})
export class PropertCardComponent {
    Property:any  = {
      "ID" : 1,
      "Name":"Duplex",
      "Type":"House",
      "Price":12000
    }
}
