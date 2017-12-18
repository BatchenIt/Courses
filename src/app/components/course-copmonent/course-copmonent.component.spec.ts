import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCopmonent } from './course-copmonent.component';

describe('CourseCopmonentComponent', () => {
  let component: CourseCopmonent;
  let fixture: ComponentFixture<CourseCopmonent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCopmonent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCopmonent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
