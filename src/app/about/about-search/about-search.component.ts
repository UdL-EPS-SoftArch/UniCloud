import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-search',
  templateUrl: './about-search.component.html',
})
export class AboutSearchComponent implements OnInit{
  searchFailed = false;
  searching = false;
  public types: string[];
  @Input() public searchedValue  = '';
  @Input() public searchedModel: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.fillTypes();
  }

  fillTypes(): void{
    this.types = ['universities'];
  }

  onSubmit(): void{
    this.router.navigate(['/' + this.searchedModel + '/'], {queryParams: { search: this.searchedValue}});
  }

}
