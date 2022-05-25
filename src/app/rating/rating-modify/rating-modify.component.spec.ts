import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingModifyComponent } from './rating-modify.component';

describe('RatingModifyComponent', () => {
  let component: RatingModifyComponent;
  let fixture: ComponentFixture<RatingModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingModifyComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
