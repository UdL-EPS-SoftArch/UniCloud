import {Component} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent {

  constructor() {
    let btn = document.getElementById("ratingbutton");
    btn.addEventListener("click", (e:Event) => this.getRating());
  }
  getRating(){

  }
}