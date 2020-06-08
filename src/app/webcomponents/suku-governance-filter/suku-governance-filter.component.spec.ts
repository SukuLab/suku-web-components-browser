import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuGovernanceFilterComponent } from './suku-governance-filter.component';

describe('SukuGovernanceFilterComponent', () => {
  let component: SukuGovernanceFilterComponent;
  let fixture: ComponentFixture<SukuGovernanceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuGovernanceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuGovernanceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
