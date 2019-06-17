import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuListProposalHeaderComponent } from './suku-list-proposal-header.component';

describe('SukuListProposalHeaderComponent', () => {
  let component: SukuListProposalHeaderComponent;
  let fixture: ComponentFixture<SukuListProposalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuListProposalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuListProposalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
