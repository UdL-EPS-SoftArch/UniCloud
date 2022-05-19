import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDeleteComponent } from './university-delete.component';

describe('UniversityDeleteComponent', () => {
  let component: UniversityDeleteComponent;
  let fixture: ComponentFixture<UniversityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
