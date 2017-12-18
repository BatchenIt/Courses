import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCopmonent } from './student-copmonent.component';

describe('StudentCopmonentComponent', () => {
  let component: StudentCopmonent;
  let fixture: ComponentFixture<StudentCopmonent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCopmonent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCopmonent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
