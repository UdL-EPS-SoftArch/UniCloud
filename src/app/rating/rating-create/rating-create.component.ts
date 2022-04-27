import {Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent {

  constructor(private location: Location) {}

  onSubmit(): void {
    console.log("estem aqui");
  }

  onCancel(): void {
    this.location.back();
  }
}
