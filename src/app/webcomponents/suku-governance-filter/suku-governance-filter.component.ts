import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'suku-governance-filter',
  templateUrl: './suku-governance-filter.component.html',
  styleUrls: ['./suku-governance-filter.component.scss']
})
export class SukuGovernanceFilterComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() customLayoutClass = 'col p-2 ';

  @Input() labelOne;
  @Input() labelOneSize = '18';
  @Input() labelOneCustomClass;

  @Input() labelTwo;
  @Input() labelTwoSize = '17';
  @Input() labelTwoCustomClass = 'subHeading';

  @Input() labelThree = 'From';
  @Input() labelThreeSize;
  @Input() labelThreeCustomClass = '';

  @Input() labelFour = 'To';
  @Input() labelFourSize;
  @Input() labelFourCustomClass = '';

  @Input() selectAllCustomClass;
  @Input() clearAllCustomClass;
  @Input() statusTypesDynamic: any[];
  @Input() filterBtnLabel = 'Apply Date Filters';
  @Output() filterOnChange = new EventEmitter();
  @Output() applyFilter = new EventEmitter();
  @Output() selectAll = new EventEmitter();
  @Output() deselectAll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
