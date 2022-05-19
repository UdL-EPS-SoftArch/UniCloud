import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {UniResource} from '../uni-resource';
import {UniResourceService} from '../uni-resource.service';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.css']
})
export class ResourceSearchComponent {
  @Output() emitResults: EventEmitter<PagedResourceCollection<UniResource>> = new EventEmitter();
  @Input() pageSize: number;
  public resourcesPagedResource: PagedResourceCollection<UniResource>;
  searchFailed = false;
  searching = false;

  constructor(private resourceService: UniResourceService) { }

  write(target: EventTarget): void{
    const text = (target as HTMLTextAreaElement).value;
    this.resourceService.findByNameContainingOrSubjectsNameContaining(text, text, this.pageSize)
      .subscribe((resources: PagedResourceCollection<UniResource>) => {
        this.resourcesPagedResource = resources;
        this.emitResults.emit(this.resourcesPagedResource);
      });
  }

}
