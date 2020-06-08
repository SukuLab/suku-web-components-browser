import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SukuOptionModalComponent } from './suku-option-modal.component';

@Component({
	selector: 'suku-proposal-option-modal',
	templateUrl: './suku-proposal-option-modal.component.html',
	styleUrls: [ './suku-proposal-option-modal.component.scss' ]
})
export class SukuProposalOptionModalComponent implements OnInit {
	showDialogChk;
	@Input()
	get ShowDialog() {
		return this.showDialogChk;
	}
	set ShowDialog(val) {
		console.log('val', val);
		this.showDialogChk = val;
		if (this.showDialogChk) {
			setTimeout(() => {
				this.openDialog();
			});
		}
	}
	@Input() dialogWidth = '640px';
	@Input() dialogHeight = 'auto';

	@Input()
	companyLogo = 'https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg';
	@Input()
	teamMembers = [
		{
			userName: 'Larry',
			userNameId: 'Larry',
			userDesignation: 'Project Manager',
			userDesignationId: 'Project Manager',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
			userImgId: 'user1',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Alein',
			userNameId: 'Alein',
			userDesignation: 'Developer',
			userDesignationId: 'Developer',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
			userImgId: 'user3',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Larry',
			userNameId: 'Larry',
			userDesignation: 'Project Manager',
			userDesignationId: 'Project Manager',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
			userImgId: 'user2',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Alein',
			userNameId: 'Alein',
			userDesignation: 'Developer',
			userDesignationId: 'Developer',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
			userImgId: 'user3',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Alein',
			userNameId: 'Alein',
			userDesignation: 'Developer',
			userDesignationId: 'Developer',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
			userImgId: 'user3',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Alein',
			userNameId: 'Alein',
			userDesignation: 'Developer',
			userDesignationId: 'Developer',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
			userImgId: 'user3',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		},
		{
			userName: 'Alein',
			userNameId: 'Alein',
			userDesignation: 'Developer',
			userDesignationId: 'Developer',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
			userImgId: 'user3',
			socialMedia: [
				{
					name: 'telegram',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-telegram',
					id: 'telegram'
				},
				{
					name: 'twitter',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-twitter-square',
					id: 'twitter'
				},
				{
					name: 'linkedin',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-linkedin-square',
					id: 'linkedIn'
				},
				{
					name: 'github',
					link: 'http://www.example.com/. ',
					icon: 'fa fa-github-alt'
				}
			],
			path: '/userDashboard',
			disabled: false,
			id: 'user'
		}
	];
	@Input() iconSize = 12;
	@Input() iconColor = '';
	@Input() iconClass = '';

	@Input() userNameSize = '';
	@Input() userNameColor = '';
	@Input() userNameClass = '';

	@Input() userDesignationSize = '';
	@Input() userDesignationColor = '';
	@Input() userDesignationClass = '';

	@Input() userImgClass = 'img-default';
	@Input() widgetCustomClass = 'img-default';
	@Output() soacialAction = new EventEmitter();
	@Input()
	links = [
		{ link: 'http://www.example.com/.' },
		{ link: 'http://www.example.com/.' },
		{ link: 'http://www.example.com/.' }
	];

	@Input() title = 'OPTION#1';
	@Input() titleSize = '';
	@Input() titleColor = '';
	@Input() titleCustomClass = '';
	@Input() titleId = 'OPTION#1';

	@Input() contentOne = 'Project A';
	@Input() contentOneId = 'contentOneId';
	@Input() contentOneSize = '';
	@Input() contentOneColor = '';
	@Input() contentOneCustomClass = '';

	@Input() imgClass = '';

	@Input() labelOne = 'Votes';
	@Input() labelOneSize = '';
	@Input() labelOneColor = '';
	@Input() labelOneCustomClass = '';
	@Input() labelOneId = 'votes';

	@Input() contenttwo = '204.5 Million/ 1 Billion';
	@Input() contentTwoId = 'contentTwoId';
	@Input() contentTwoSize = '';
	@Input() contentTwoColor = '';
	@Input() contentTwoCustomClass = '';

	@Input() labelTwo = 'Propsal Option Outline';
	@Input() labelTwoSize = '';
	@Input() labelTwoColor = '';
	@Input() labelTwoCustomClass = '';
	@Input() labelTwoId = 'OptionOutlineId';

	@Input()
	outline = `Microsoft sees 2012 as a year of rebirth. And so on Thursday it unveiled
  its first new logo since 1987.The logo has two components: the logotype and the symbol. For the logotype, we are
  using the Segoe font
  which is the same font we use in our products as well as our marketing communications.
  The logo has two components: the logotype and the symbol. For the logotype, we are using the Segoe font
  which is the same font we use in our products as well as our marketing communications.
  Microsoft sees 2012 as a year of rebirth. And so on Thursday it unveiled
  its first new logo since 1987.The logo has two components: the logotype and the symbol. For the logotype, we are
  using the Segoe font
  which is the same font we use in our products as well as our marketing communications.
  The logo has two components: the logotype and the symbol. For the logotype, we are using the Segoe font
  which is the same font we use in our products as well as our marketing communications.
  Microsoft sees 2012 as a year of rebirth. And so on Thursday it unveiled
  its first new logo since 1987.The logo has two components: the logotype and the symbol. For the logotype, we are
  using the Segoe font
  which is the same font we use in our products as well as our marketing communications.
  The logo has two components: the logotype and the symbol. For the logotype, we are using the Segoe font
	which is the same font we use in our products as well as our marketing communications.`;
	@Input() outlineSize = '';
	@Input() outlineColor = '';
	@Input() outlineCustomClass = '';
	@Input() outlineId = 'OptionOutline';

	@Input() labelThree = 'Full Team';
	@Input() labelThreeSize = '';
	@Input() labelThreeColor = '';
	@Input() labelThreeCustomClass = '';
	@Input() labelThreeId = 'fullTeam';

	@Input() labelFour = 'Additional Resources';
	@Input() labelFourSize = '';
	@Input() labelFourColor = '';
	@Input() labelFourCustomClass = '';
	@Input() labelFourId = 'Resources';

	@Input() linksKey = 'link';
	@Output() enable = new EventEmitter();

	constructor(public customDialog: MatDialog) {}

	ngOnInit() {
		this.showDialogChk = false;
	}

	openDialog() {
		const dialogRef = this.customDialog.open(SukuOptionModalComponent, {
			height: this.dialogHeight,
			width: this.dialogWidth,
			disableClose: false,
			data: {
				title: this.title,
				titleSize: this.titleSize,
				titleColor: this.titleColor,
				titleCustomClass: this.titleCustomClass,
				titleId: this.titleId,
				contentOne: this.contentOne,
				contentOneId: this.contentOneId,
				contentOneSize: this.contentOneSize,
				contentOneColor: this.contentOneColor,
				contentOneCustomClass: this.contentOneCustomClass,
				imgClass: this.imgClass,
				labelOne: this.labelOne,
				labelOneSize: this.labelOneSize,
				labelOneColor: this.labelOneColor,
				labelOneCustomClass: this.labelOneCustomClass,
				labelOneId: this.labelOneId,
				contenttwo: this.contenttwo,
				contentTwoId: this.contentTwoId,
				contentTwoSize: this.contentTwoSize,
				contentTwoColor: this.contentTwoColor,
				contentTwoCustomClass: this.contentTwoCustomClass,
				labelTwo: this.labelTwo,
				labelTwoSize: this.labelTwoSize,
				labelTwoColor: this.labelTwoColor,
				labelTwoCustomClass: this.labelTwoCustomClass,
				labelTwoId: this.labelTwoId,
				outlineSize: this.outlineSize,
				outlineColor: this.outlineColor,
				outlineCustomClass: this.outlineCustomClass,
				outlineId: this.outlineId,
				labelThree: this.labelThree,
				labelThreeSize: this.labelThreeSize,
				labelThreeColor: this.labelThreeColor,
				labelThreeCustomClass: this.labelThreeCustomClass,
				labelThreeId: this.labelThreeId,
				labelFour: this.labelFour,
				labelFourSize: this.labelFourSize,
				labelFourColor: this.labelFourColor,
				labelFourCustomClass: this.labelFourCustomClass,
				labelFourId: this.labelFourId,
				companyLogo: this.companyLogo,
				teamMembers: this.teamMembers,
				iconSize: this.iconSize,
				iconColor: this.iconColor,
				iconClass: this.iconClass,
				userNameSize: this.userNameSize,
				userNameColor: this.userNameColor,
				userNameClass: this.userNameClass,
				userDesignationSize: this.userDesignationSize,
				userDesignationColor: this.userDesignationColor,
				userDesignationClass: this.userDesignationClass,
				userImgClass: this.userImgClass,
				widgetCustomClass: this.widgetCustomClass,
				links: this.links,
				outline: this.outline,
				linksKey: this.linksKey
			}
		});
		dialogRef.afterClosed().subscribe((confirm: boolean) => {
			this.showDialogChk = false;
			this.ShowDialog = false;
			this.enable.emit(false);
		});
	}
}
