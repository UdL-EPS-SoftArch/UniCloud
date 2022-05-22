import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingListComponent } from './rating-list.component';

describe('ratingListComponent', () => {
  let component: RatingListComponent;
  let fixture: ComponentFixture<RatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
