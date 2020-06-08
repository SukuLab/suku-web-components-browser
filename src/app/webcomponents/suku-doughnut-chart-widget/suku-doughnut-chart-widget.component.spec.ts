import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDoughnutChartWidgetComponent } from './suku-doughnut-chart-widget.component';

describe('SukuDoughnutChartWidgetComponent', () => {
  let component: SukuDoughnutChartWidgetComponent;
  let fixture: ComponentFixture<SukuDoughnutChartWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDoughnutChartWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDoughnutChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
