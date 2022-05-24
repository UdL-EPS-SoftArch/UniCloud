import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DegreeService } from '../degree.service';
import {Degree} from '../degree';

@Component({
  selector: 'app-degree-delete',
  templateUrl: './degree-delete.component.html',
  styleUrls: ['./degree-delete.component.css']
})
export class DegreeDeleteComponent implements OnInit {
  public degree: Degree = new Degree();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private degreeService: DegreeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.degreeService.getResource(id).subscribe(
      degree => this.degree = degree);
  }

  delete(): void {
    this.degreeService.deleteResource(this.degree).subscribe(
      () => {
        this.router.navigate(['/degrees']);
      });
  }

}
