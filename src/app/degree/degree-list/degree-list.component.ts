import {Router} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import { Degree } from '../degree';
import { DegreeService } from '../degree.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {University} from '../../university/university';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
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
  @Input() public university: string;
  constructor(
    public router: Router,
    private degreeService: DegreeService,
    private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    console.log(this.university);
    if (this.university == null) {
      this.degreeService.getPage({pageParams: {size: this.pageSize}, sort: {degrees: 'ASC'}}).subscribe(
        (page: PagedResourceCollection<Degree>) => {
          this.degreesPagedResource = page;
          this.degrees = page.resources;
          this.totalDegrees = page.totalElements;
          this.getUniversities();
        });
    }else {
      this.degreeService.findByUniversity(this.university).subscribe(
        (page: PagedResourceCollection<Degree>) => {
          this.degreesPagedResource = page;
          this.degrees = page.resources;
          this.totalDegrees = page.totalElements;
          this.getUniversities();
        });
    }
  }

  changePage(): void {
    this.degreesPagedResource.customPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { name: 'ASC' } }).subscribe
    ((page: PagedResourceCollection<Degree>) => {
      this.degrees = page.resources;
      this.getUniversities();
    });
  }


  modifyList(degreePagedResource: PagedResourceCollection<Degree>): void{
    this.degreesPagedResource = degreePagedResource;
    this.degrees = this.degreesPagedResource.resources;
    this.totalDegrees = this.degreesPagedResource.totalElements;
    this.getUniversities();
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

  getUniversities(): void {
    this.degrees.map(degree => {
      degree.getRelation('university').subscribe((university: University) => {
        degree.university = university;
      });
    });
  }
}
