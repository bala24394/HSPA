import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyID : number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyID = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyID = +params['id'];
      }

    )
  }

  nextPage(){
     this.propertyID +=1;
     this.router.navigate(['property-detail'+this.propertyID]);
  }

}
