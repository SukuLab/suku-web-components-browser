import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { WebComponentsServices } from './service';
import { person } from './service';
import { SukuGovernanceWebcomponentsService } from '../suku-governance-webcomponents.service';
import { SukuModalService } from '../suku-proposal-option-modal/suku-modal.service';
import { SukuModalService as sukuService } from 'suku-webcomponents';
@Component({
	selector: 'app-documentation',
	templateUrl: 'documentation.html',
	styleUrls: ['./documentation.scss']
})
export class DocumentationComponent implements OnInit {
	data: any;
	dataDom;
	dataLength = 0;
	parentForm: FormGroup;
	radioGroup: FormGroup;
	questionkey;
	content;
	selectedItem: any;
	subMenuList;
	imgs = '../../../assets/images/*';
	images: any;
	webCompTitleList;
	selectedTitle: any;
	displayedColumns: string[] = ['Properties', 'Description'];
	dataSource;
	CompDocSource;
	person;
	value;
	bids;
	selectedBid: any;
	copied: any;
	dynamicData: string;
	dynamicHeight = 200;
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
	@ViewChild('editor') editor;
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
	statusTypesDynamic = [
		{
			displayName: 'Proposal Status',
			key: 'Proposal Status',
			checked: true,
			level: 0,
			label: true,
			hasSub: true,
			sub: [
				{
					displayName: 'Open',
					key: 'Open',
					level: 0,
					checked: false,
					hasSub: false,
					sub: []
				},
				{
					displayName: 'Closed',
					key: 'Closed',
					checked: false,
					level: 0,
					hasSub: false,
					sub: []
				}
			]
		},
		{
			displayName: 'Vote Status',
			key: 'Vote Status',
			checked: true,
			level: 0,
			label: true,
			hasSub: true,
			sub: [
				{
					displayName: 'Have Voted',
					key: 'Voted',
					checked: false,
					level: 1,
					hasSub: true,
					sub: []
				},
				{
					displayName: 'Have Not Voted',
					key: 'NotVoted',
					checked: false,
					level: 1,
					hasSub: false,
					sub: []
				}
			]
		}
	];
	collapsePreview: boolean;
	beneficialOwnerStatus = [
		{
			firstName: 'Jaison',
			verificationStatus: 'document',
			labelThree: '',
			data: [
				{
					'labelOne': 'Doc Type:',
					'labelTwo': 'Status:',
					'labelThree': 'Failure Reason:',
					type: 'Jaison',
					status: 'document',
					failureReason: 'NOn'
				}
			]
		},
		{
			firstName: 'Jaison',
			verificationStatus: 'verify'
		}
	];
	status = 'document';
	documentStatus = [
		{
			'labelOne': 'Doc Type:',
			'labelTwo': 'Status:',
			'labelThree': 'Failure Reason:',
			type: 'Jaison',
			status: 'document'
		},
		{
			'labelOne': 'Doc Type:',
			type: 'Jaison',
			status: 'verify'
		}
	];

	constructor(private fb: FormBuilder, private domSanitizer: DomSanitizer,
		private services: WebComponentsServices, private sukuService: SukuModalService,
		private SukuService: sukuService) {
		this.person = person;
	}

	ngOnInit() {
		this.parentForm = this.fb.group({
			sukuRadio:'',
			selectAll: '',
			Status: '',
			sort: 'default',
			Open: '',
			Completed: '',
			fromDate: null,
			tillDate: null,
			statusTypess: this.fb.array([]),
			firstName: '',
			productId: ['', [Validators.required]],
			checkAgreement: '',
			code: '',
			radio:true
		});
	// 	this.radioGroup = this.fb.group({
	// 		traceabilityProduct: true,
	//  });
		this.parentForm.get('code').valueChanges.subscribe((v) => {
			this.executeCode();
			console.log('data', v)
		});
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
		this.selectedTitle = { name: "Getting Started", id: 0 };
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
		this.dataLength = 0;
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
		}
	}

	collapseFuc() {
		console.log("", this.collapse);
		this.collapse = !this.collapse;
	}

	selectAll() {
		this.statusTypesDynamic.forEach((ele) => {
			ele.checked = true;
			if (ele.hasSub) {
				ele.sub.forEach((sele) => {
					sele.checked = true;
				});
			}
		});
	}

	deselectAll() {
		this.statusTypesDynamic.forEach((ele) => {
			if (ele.checked) {
				ele.checked = true;
				if (ele.hasSub) {
					ele.sub.forEach((sele) => {
						sele.checked = false;
					});
				}
			}
		});
	}

	openSukuDialog(id) {
		if (id == 42) {
			this.sukuService.openInfoModal("");
		}
		if (id == 39) {
			this.sukuConfirmService();
		}
	}

	sukuConfirmService() {
		const data = {
			'icon': 'fa fa-question',
			'iconCustomClass': '',
			'iconId': 'questionIcon',
			'titleOne': 'Are You Sure?',
			'titleOneId': 'confirmation',
			'titleTwo': `Are you sure you'd like to delete this Listing?`,
			'titleTwoId': '',
			'titleThree': '',
			'titleThreeId': '',
			'titleBoxCustomClass': '',
			'buttonLableOne': 'cancel',
			'buttonLableOneId': '',
			'buttonLableTwo': 'delete',
			'buttonLableTwoId': '',
			'buttonCustomClass': ''
		};
		this.SukuService.openConfirmationDialog(data);
	}

}
