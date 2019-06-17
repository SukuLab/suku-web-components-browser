import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'suku-doughnut-chart-widget',
	templateUrl: './suku-doughnut-chart-widget.component.html',
	styleUrls: [ './suku-doughnut-chart-widget.component.scss' ]
})
export class SukuDoughnutChartWidgetComponent implements OnInit {
	@Input() title = 'Voting Brakedown';
	@Input() titleSize;
	type = 'PieChart';
	@Input()
	doughnutChartData = [
		[ 'Choice #01', 20000 ],
		[ 'Choice #02', 30000 ],
		[ 'Choice #03', 40000 ],
		[ 'Choice #04', 50000 ]
	];
	@Input()
	optionsStyle = {
		title: '',
		pieHole: 0.75,
		pieSliceBorderColor: 'none',
		colors: [ '#4c4b4b', '#7a7575', '#9a9a9a', '#b7afaf', '#c8c7c7' ],
		legend: {
			position: 'none'
		},
		pieSliceText: 'none',
		tooltip: {
			trigger: ''
		}
	};
	@Input() width = 180;
	@Input() height = 180;

	constructor() {}

	ngOnInit() {}
}
