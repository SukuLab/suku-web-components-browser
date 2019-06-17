import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuUsersWidgetComponent } from './suku-users-widget.component';

describe('SukuUsersWidgetComponent', () => {
  let component: SukuUsersWidgetComponent;
  let fixture: ComponentFixture<SukuUsersWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuUsersWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuUsersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
