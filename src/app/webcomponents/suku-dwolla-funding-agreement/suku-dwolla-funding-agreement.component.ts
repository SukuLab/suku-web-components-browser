import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'suku-dwolla-funding-agreement',
  templateUrl: './suku-dwolla-funding-agreement.component.html',
  styleUrls: ['./suku-dwolla-funding-agreement.component.scss']
})
export class SukuDwollaFundingAgreementComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() title = 'Funding Source Agreement';
  @Input() titleClass = 'mb-3 mt-5 ';
  @Input() control;
  @Input() checkBoxId = 'checkAgreement';
  @Input() content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
  @Input() contentId = 'termsID';
  @Output() submit = new EventEmitter();
  formValid: Boolean = true;

  constructor() { }

  ngOnInit() {

  }

  action() {
    const controlName = this.control;
    if (this.form.get(controlName).value) {
    	this.formValid = false;
			} else {
				this.formValid = true;
			}
  }

  agree() {
    console.log(this.form);
    this.submit.emit(this.form);
  }

}
