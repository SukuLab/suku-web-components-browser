import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { WebComponentsServices } from './service';
import { person } from './service';
@Component({
	selector: 'app-documentation',
	templateUrl: 'documentation.html',
	styleUrls: [ './documentation.scss' ]
})

export class DocumentationComponent implements OnInit {
	data: any;
	dataDom;
	dataLength = 0;
	parentForm: FormGroup;
	questionkey;
	content;
	selectedItem: any;
	subMenuList;
	imgs = '../../../assets/images/*';
	images: any;
	webCompTitleList;
	selectedTitle: any;
	displayedColumns: string[] = [ 'Properties', 'Description' ];
	dataSource;
	CompDocSource;
	person;
	value;
	bids;
	selectedBid: any;
	constructor(private fb: FormBuilder,
		private domSanitizer: DomSanitizer,
		private services: WebComponentsServices) {
		this.person = person;
	}

	ngOnInit() {
		this.parentForm = this.fb.group({
			selectAll: '',
			Status: '',
			sort: 'default',
			Open: '',
			Completed: '',
			fromDate: null,
			tillDate: null,
			statusTypess: this.fb.array([]),
			firstName: ''
		});
		this.parentForm.valueChanges.subscribe((v) => console.log('data', v));
		this.subMenuList = [
			{
				name: 'Components',
				id: 1
			},
			{
				name: 'Assets',
				id: 2
			}
		];
		this.webCompTitleList = this.services.webcomponentList();
		this.dataSource = this.services.Properties_DATA;
		this.CompDocSource = this.services.Content_DATA;
	}

	executeCode() {
		this.data = (<HTMLInputElement>document.getElementById('code')).value;
		this.dataLength = this.data.length;
		this.dataDom = this.domSanitizer.bypassSecurityTrustHtml(this.data);
	}

	btnSelected(event, newValue) {
		console.log(newValue);
		this.selectedItem = newValue;
	}

	titleActive(event, newValue) {
		this.selectedTitle = newValue;
		this.dataDom = '';
	}

	change(value) {
		console.log("value", value);
	}

}
