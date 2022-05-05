import {Component} from '@angular/core';
import { Location } from '@angular/common';
import {Rating} from '../rating';
import {Router} from '@angular/router';
import {RatingService} from '../rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent {

  public rating : Rating;
  constructor(private router: Router, private location: Location, private ratingService: RatingService) {}

  ngOnInit(): void{
    this.rating = new Rating();
  }

  onSubmit(): void {
    this.rating.createResource({ body: this.user }).subscribe(()=> this.router.navigate(['/ratings']));
  }

  onCancel(): void {
    this.location.back();
  }
}
