import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuListProposalChoiceWidgetComponent } from './suku-list-proposal-choice-widget.component';

describe('SukuListProposalChoiceWidgetComponent', () => {
  let component: SukuListProposalChoiceWidgetComponent;
  let fixture: ComponentFixture<SukuListProposalChoiceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuListProposalChoiceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuListProposalChoiceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
