import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProposalOptionModalComponent } from './suku-proposal-option-modal.component';

describe('SukuProposalOptionModalComponent', () => {
  let component: SukuProposalOptionModalComponent;
  let fixture: ComponentFixture<SukuProposalOptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProposalOptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProposalOptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
