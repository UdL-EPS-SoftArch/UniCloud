import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSearchComponent } from './degree-search.component';

describe('DegreeSearchComponent', () => {
  let component: DegreeSearchComponent;
  let fixture: ComponentFixture<DegreeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
