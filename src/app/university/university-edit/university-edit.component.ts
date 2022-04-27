import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UniversityService } from '../university.service';
import { University } from '../university';

@Component({
  selector: 'app-university-edit',
  templateUrl: './university-edit.component.html',
  styleUrls: ['./university-edit.component.css']
})
export class UniversityEditComponent implements OnInit {

  public university: University = new University();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private universityService: UniversityService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.universityService.getResource(id).subscribe(
      (university: University) => this.university = university );
  }

  onSubmit(): void {
    this.universityService.patchResource(this.university).subscribe(
      (patchedUniversity: University) => {
        this.router.navigate(['universities', patchedUniversity.id]);
      });
  }

  getCurrentUniversityId(): string {
    return this.university.id;
  }

}


