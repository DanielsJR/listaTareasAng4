import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIconsComponent } from './task-icons.component';

describe('TaskIconsComponent', () => {
  let component: TaskIconsComponent;
  let fixture: ComponentFixture<TaskIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
