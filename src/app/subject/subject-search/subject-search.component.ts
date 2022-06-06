import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject} from '../subject';
import {SubjectService} from '../subject.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';


@Component({
  selector: 'app-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: ['./subject-search.component.css']
})
export class SubjectSearchComponent {
  @Output() emitResults: EventEmitter<PagedResourceCollection<Subject>> = new EventEmitter();
  public subjectsPagedResource: PagedResourceCollection<Subject>;
  searchFailed = false;
  searching = false;
  @Input() pageSize: number;

  constructor(private subjectService: SubjectService) {
  }

  write(target: EventTarget): void {
    const text = (target as HTMLTextAreaElement).value;
    this.subjectService.findByNameContainingOrCourseContainingOrOptionalContaining(text, text, text, this.pageSize)
      .subscribe((subjects: PagedResourceCollection<Subject>) => {
        this.subjectsPagedResource = subjects;
        this.emitResults.emit(this.subjectsPagedResource);
      });
  }
}
