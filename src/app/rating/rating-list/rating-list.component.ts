import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';
import { RatingService } from '../rating.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {map, switchMap} from "rxjs/operators";
import {UniResource} from "../../resource/uni-resource";
import {User} from "../../login-basic/user";
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  public ratingsPagedResource: PagedResourceCollection<Rating>;
  public ratings: Rating[] = [];
  public pageSize = 4;
  public page = 1;
  public totalratings = 0;

  constructor(
    public router: Router,
    private ratingService: RatingService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.ratingService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Rating>) => {
        this.ratingsPagedResource = page;
        this.ratings = page.resources;
        this.totalratings = page.totalElements;
        this.ratings.map(rating => {
          rating.getRelation('author').subscribe((user: User) => {
            rating.author = user;
          });
        });
      });
  }

  changePage(): void{
    this.ratingsPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize },  sort: {name: 'ASC'}}).subscribe
    ((page: PagedResourceCollection<Rating>) =>
    { this.ratings = page.resources; });
  }

  modifyList(RatingPagedResource: PagedResourceCollection<Rating>): void{
    this.ratingsPagedResource = RatingPagedResource;
    this.ratings = this.ratingsPagedResource.resources;
    this.totalratings = this.ratingsPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
