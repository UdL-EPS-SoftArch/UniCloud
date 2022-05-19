import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Degree } from '../degree';
import { DegreeService } from '../degree.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {University} from '../../university/university';
@Component({
  selector: 'app-degree-list',
  templateUrl: './degree-list.component.html',
  styleUrls: ['./degree-list.component.css']
})
export class DegreeListComponent implements OnInit {
  public degreesPagedResource: PagedResourceCollection<Degree>;
  public degrees: Degree[] = [];
  public pageSize = 5;
  public page = 1;
  public totalDegrees = 0;

  constructor(
    public router: Router,
    private degreeService: DegreeService) { }

  ngOnInit(): void {
    this.degreeService.getPage({ pageParams : { size: this.pageSize }, sort: { degrees: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Degree>) => {
        this.degreesPagedResource = page;
        this.degrees = page.resources;
        this.totalDegrees = page.totalElements;
        this.degrees.map(degree => {
          degree.getRelation('university').subscribe((university: University) => {
            degree.university = university;
          });
        });
      });
  }

  changePage(): void {
    this.degreesPagedResource.customPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { degrees: 'ASC' } }).subscribe
    ((page: PagedResourceCollection<Degree>) => this.degrees = page.resources);
  }


  modifyList(degreePagedResource: PagedResourceCollection<Degree>): void{
    this.degreesPagedResource = degreePagedResource;
    this.degrees = this.degreesPagedResource.resources;
    this.totalDegrees = this.degreesPagedResource.totalElements;
  }

}
