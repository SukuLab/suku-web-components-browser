import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'suku-governance-filter',
  templateUrl: './suku-governance-filter.component.html',
  styleUrls: ['./suku-governance-filter.component.scss']
})
export class SukuGovernanceFilterComponent implements OnInit {
  @Input() customLayoutClass = 'col p-2 ';
  @Input() form: FormGroup;
  @Input() filterHeading;
  @Input() size = '15';
  @Input() headingSize = '18';
  @Input() headingCustomClass;
  @Input() filterSubHeading;
  @Input() statusTypesDynamic: any[];
  @Output() filterOnChange = new EventEmitter();
  @Output() applyFilter = new EventEmitter();
  @Output() selectAll = new EventEmitter();
  @Output() deselectAll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
