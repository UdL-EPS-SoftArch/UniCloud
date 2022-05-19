import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RatingDeleteComponent} from './rating-delete.component';

describe('RatingDeleteComponent', () => {
  let component: RatingDeleteComponent;
  let fixture: ComponentFixture<RatingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingDeleteComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
