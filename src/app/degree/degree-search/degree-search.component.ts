import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {Degree} from '../degree';
import {DegreeService} from '../degree.service';

@Component({
  selector: 'app-degree-search',
  templateUrl: './degree-search.component.html',
  styleUrls: ['./degree-search.component.css']
})
export class DegreeSearchComponent {
  @Output() emitResults: EventEmitter<PagedResourceCollection<Degree>> = new EventEmitter();
  public degreesPagedResource: PagedResourceCollection<Degree>;
  searchFailed = false;
  searching = false;
  @Input() pageSize: number;

  constructor(private degreeService: DegreeService) { }

  write(target: EventTarget): void {
    const text = (target as HTMLTextAreaElement).value;
    this.degreeService.findByNameContainingOrFacultyContainingOrUniversityNameContaining(text, text, text, this.pageSize)
      .subscribe((degrees: PagedResourceCollection<Degree>) => {
        this.degreesPagedResource = degrees;
        this.emitResults.emit(this.degreesPagedResource);
      });
  }
}
