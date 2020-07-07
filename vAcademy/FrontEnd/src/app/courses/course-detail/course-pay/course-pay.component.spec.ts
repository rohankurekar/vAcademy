import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePayComponent } from './course-pay.component';

describe('CoursePayComponent', () => {
  let component: CoursePayComponent;
  let fixture: ComponentFixture<CoursePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
