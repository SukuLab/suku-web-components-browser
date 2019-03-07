import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'suku-beneficial-owner',
	templateUrl: './suku-beneficial-owner.component.html',
	styleUrls: [ './suku-beneficial-owner.component.scss' ]
})
export class SukuBeneficialOwnerComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() title = 'Beneficial Owners';
	@Input() titleClass = 'mb-3 mt-5 ';
	@Input() countriesList;
	@Input() statesList;
	@Input() formValid: Boolean;
	@Input() control;
	@Input()
	content = `I, Daisy, hereby certify, to the best of my knowledge, that the
  information provided above is complete and correct.`;
	@Output() countrySelect = new EventEmitter();
	@Output() stateSelect = new EventEmitter();
	@Output() upload = new EventEmitter();
	@Output() submit = new EventEmitter();
	selected = [];
	toggle = [];
	constructor() {}

	ngOnInit() {
		this.formValid = true;
		for (let j = 0; j < this.form.get('owner')['controls'].length; j++) {
			this.toggle[j] = false;
		}
	}

	active(i) {
		this.selected[i] = i;
		this.toggle[i] = !this.toggle[i];
		for (let j = 0; j < this.form.get('owner')['controls'].length; j++) {
			if (i != j) {
				this.selected[j] = null;
			}
		}
		if (!this.toggle[i]) {
			this.selected[i] = null;
		} else {
			for (let j = 0; j < this.form.get('owner')['controls'].length; j++) {
				if (i != j) {
					this.toggle[j] = false;
					console.log('j', i, j, 'true', this.toggle, this.selected);
				}
			}
		}
	}

	action() {
		const controlName = this.control;
		console.log(this.control, this.form.get(controlName).value);
		if (this.form.get(controlName).value) {
			this.formValid = false;
		} else {
			this.formValid = true;
		}
	}

	agree() {
		this.submit.emit(this.form);
	}
}
