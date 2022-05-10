import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Degree } from '../degree';
import { DegreeService } from '../degree.service';
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";


@Component({
  selector: 'app-degree-list',
  templateUrl: './degree-list.component.html',
  styleUrls: ['./degree-list.component.css']
})
export class DegreeListComponent implements OnInit {
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
        this.degrees = page.resources;
        this.totalDegrees = page.totalElements;
      });
  }

  changePage(): void {
    this.degreeService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { degrees: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Degree>) => this.degrees = page.resources);
  }

  detail(degree: Degree): void {
    this.router.navigate(['degrees', degree.id]);
  }

}
