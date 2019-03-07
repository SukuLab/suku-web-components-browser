import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	copied: any;
	dynamicData: string;
	dynamicHeight = 200;
	@ViewChild('editor') editor;
	disableBtnForID: boolean;
	dummyData;
	productJsonArrayForId: string;
	searchTraceToggleForID: boolean;
	isSearchForID: boolean;
	searchResultForID: boolean;
	traceResultForID: any;
	search;
	treeData;
	collapse: Boolean = false;
	transactionDetails = [
		{
		 'type': 'outgoing',
		 'myAccount': 'Chase XXX',
		 'counterParty': 'Logan',
		 'amount': 500,
		 'status': 'Complete',
		 'dateCreated': '2/1/19'
	   },
		 {
		 'type': 'outgoing',
		 'myAccount': 'Chase XXX',
		 'counterParty': 'Logan',
		 'amount': 200,
		 'status': 'Pending',
		 'dateCreated': '2/1/19'
	   },
		 {
		 'type': 'Incoming',
		 'myAccount': 'Chase XXX',
		 'counterParty': 'Logan',
		 'amount': 100,
		 'status': 'Failed',
		 'dateCreated': '2/1/19'
	   },
		 {
		'type': 'outgoing',
		'myAccount': 'Chase XXX',
		'counterParty': 'Logan',
		'amount': 500,
		'status': 'Complete',
		'dateCreated': '2/1/19'
	  },
		{
		'type': 'outgoing',
		'myAccount': 'Chase XXX',
		'counterParty': 'Logan',
		'amount': 200,
		'status': 'Pending',
		'dateCreated': '2/1/19'
	  },
		{
		'type': 'Incoming',
		'myAccount': 'Chase XXX',
		'counterParty': 'Logan',
		'amount': 100,
		'status': 'Failed',
		'dateCreated': '2/1/19'
	  }
	  ];
	constructor(private fb: FormBuilder, private domSanitizer: DomSanitizer, private services: WebComponentsServices) {
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
			firstName: '',
			productId: [ '', [ Validators.required ] ],
			checkAgreement:''
		});
		this.parentForm.valueChanges.subscribe((v) => console.log('data', v));
		this.subMenuList = [
			{
				name: 'Components',
				id: 1
			}
		];
		this.webCompTitleList = this.services.webcomponentList();
		this.dataSource = this.services.Properties_DATA;
		this.CompDocSource = this.services.Content_DATA;
		this.searchTraceToggleForID = true;
		this.disableBtnForID = false;
		this.selectedTitle = {name: "Getting Started", id: 0};
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

	copySample() {
		const copyText = <HTMLInputElement>document.getElementById('sampleCode');
		copyText.select();
		document.execCommand('copy');
		(<HTMLInputElement>document.getElementById('copied')).classList.add('copied');
		setTimeout(() => {
			console.log('executed');
			(<HTMLInputElement>document.getElementById('copied')).classList.remove('copied');
		}, 1500);
	}

	textJsonData() {
		const data = (<HTMLInputElement>document.getElementById('datas')).value.replace(/\s/g, '');
		console.log('data', data);
		// console.log("json data", JSON.parse(data));
		const validData = data;
		this.dynamicData = validData;
	}

	showResultsForID(value) {
		this.searchResultForID = false;
		console.log('isSearch in keyup', this.isSearchForID, 'searchResult', this.searchResultForID);
		if (this.isSearchForID == true) {
			this.searchTraceToggleForID = true;
			console.log('searchTraceToggle', this.searchTraceToggleForID);
		}
		console.log('-- keyup', value, this.parentForm.value.productId);
	}

	searchByProductnameForID() {
		this.disableBtnForID = false;
		this.dummyData = [
			{
				product: {
					id: '1000',
					name: 'item Ax1000',
					description: 'item A'
				},
				uid: '1000'
			},
			{
				product: {
					id: '1002',
					name: 'item Bx1002',
					description: 'item B'
				},
				uid: '1002'
			},
			{
				product: {
					id: '1003',
					name: 'item Cx1003',
					description: 'item C'
				},
				uid: '1003'
			},
			{
				product: {
					id: '1005',
					name: 'item Ex1005',
					description: 'item E'
				},
				uid: '1005'
			},
			{
				product: {
					id: '1004',
					name: 'item Dx1004',
					description: 'item D'
				},
				uid: '1004'
			},
			{
				product: {
					id: '1006',
					name: 'item Fx1006',
					description: 'item F'
				},
				uid: '1006'
			},
			{
				product: {
					id: '1007',
					name: 'item Gx1007',
					description: 'item G'
				},
				uid: '1007'
			},
			{
				product: {
					id: '1008',
					name: 'item Hx1008',
					description: 'item H'
				},
				uid: '1008'
			}
		];
		this.productJsonArrayForId = JSON.stringify(this.dummyData);
		this.searchTraceToggleForID = false;
		console.log('dynamicif', this.dummyData);
		if (this.dummyData.length > 0) {
			this.isSearchForID = true;
			this.searchResultForID = true;
			console.log('isSearch in if', this.searchResultForID);
			this.searchTraceToggleForID = false;
		} else {
			this.isSearchForID = false;
			this.searchResultForID = true;
			console.log('isSearch in else', this.isSearchForID);
			this.searchTraceToggleForID = true;
		}
	}

	selectproductsDataForID(val) {
		if (val) {
			this.disableBtnForID = true;
		}
		this.traceResultForID = val;
		console.log('val', val, this.disableBtnForID);
	}

	traceProductForID() {
		if (this.traceResultForID) {
			console.log("this.traceResult.product.id", this.traceResultForID.product.id);
			const value = this.traceResultForID.product.id;
			// const url = '/showTrace';
			// this.router.navigate([ url ], { queryParams: { id: value } });
		}
	}

	collapseFuc() {
		console.log("", this.collapse);
		this.collapse = !this.collapse;
	}

}
