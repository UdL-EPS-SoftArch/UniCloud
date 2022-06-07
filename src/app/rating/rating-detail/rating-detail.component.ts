import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Rating} from '../rating';
import {RatingService} from '../rating.service';
import {switchMap} from 'rxjs/operators';
import {UniResource} from '../../resource/uni-resource';
import {User} from '../../login-basic/user';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.css']
})
export class RatingDetailComponent implements OnInit {
  public rating: Rating = new Rating();

  constructor(private route: ActivatedRoute,
              private ratingService: RatingService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.ratingService.getResource(id).pipe(
      switchMap(rating => {
        this.rating = rating;
        return this.rating.getRelation<UniResource>('resourceRated');
      }),
      switchMap((uniresource: UniResource) => {
        this.rating.resourceRated = uniresource;
        return this.rating.getRelation<User>('author');
      })
    ).subscribe(user => {
      this.rating.author = user;
    });

  }



  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
