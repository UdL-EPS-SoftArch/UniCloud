import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeDeleteComponent } from './degree-delete.component';

describe('DegreeDeleteComponent', () => {
  let component: DegreeDeleteComponent;
  let fixture: ComponentFixture<DegreeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
