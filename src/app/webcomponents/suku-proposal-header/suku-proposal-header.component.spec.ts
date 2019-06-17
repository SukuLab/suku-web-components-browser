import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProposalHeaderComponent } from './suku-proposal-header.component';

describe('SukuProposalHeaderComponent', () => {
  let component: SukuProposalHeaderComponent;
  let fixture: ComponentFixture<SukuProposalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProposalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProposalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
