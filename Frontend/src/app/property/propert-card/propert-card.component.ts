import { IProperty } from './../IProperty.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-card',
  templateUrl: './propert-card.component.html',
  styleUrls: ['./propert-card.component.css']
})
export class PropertCardComponent {
  @Input() property_name : IProperty;
}
