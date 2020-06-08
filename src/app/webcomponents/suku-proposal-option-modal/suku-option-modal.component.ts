import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NguCarousel, NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
@Component({
	selector: 'suku-option-modal',
	templateUrl: './suku-option-modal.component.html',
	styleUrls: [ './suku-proposal-option-modal.component.scss' ]
})
export class SukuOptionModalComponent implements OnInit {
	dialogTitle: string;
	dialogText: string;
	screenWidth = screen.width;
	slideIndex = 4;
	@Input()
	modalData = {
		companyLogo:
			'https://s3-eu-west-1.amazonaws.com/farmplan-assets-live/sites/1/2019/02/Microsoft-logo_rgb_c-gray.png',
		teamMembers: [
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
						link: 'xyz',
						icon: 'fa fa-telegram',
						id: 'telegram'
					},
					{
						name: 'twitter',
						link: 'xyz',
						icon: 'fa fa-twitter-square',
						id: 'twitter'
					},
					{
						name: 'linkedin',
						link: 'xyz',
						icon: 'fa fa-linkedin-square',
						id: 'linkedIn'
					},
					{
						name: 'github',
						link: 'xyz',
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
				userImgId: 'user1',
				socialMedia: [
					{
						name: 'telegram',
						link: 'xyz',
						icon: 'fa fa-telegram',
						id: 'telegram'
					},
					{
						name: 'twitter',
						link: 'xyz',
						icon: 'fa fa-twitter-square',
						id: 'twitter'
					},
					{
						name: 'linkedin',
						link: 'xyz',
						icon: 'fa fa-linkedin-square',
						id: 'linkedIn'
					},
					{
						name: 'github',
						link: 'xyz',
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
				userImgId: 'user1',
				socialMedia: [
					{
						name: 'telegram',
						link: 'xyz',
						icon: 'fa fa-telegram',
						id: 'telegram'
					},
					{
						name: 'twitter',
						link: 'xyz',
						icon: 'fa fa-twitter-square',
						id: 'twitter'
					},
					{
						name: 'linkedin',
						link: 'xyz',
						icon: 'fa fa-linkedin-square',
						id: 'linkedIn'
					},
					{
						name: 'github',
						link: 'xyz',
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
				userImgId: 'user1',
				socialMedia: [
					{
						name: 'telegram',
						link: 'xyz',
						icon: 'fa fa-telegram',
						id: 'telegram'
					},
					{
						name: 'twitter',
						link: 'xyz',
						icon: 'fa fa-twitter-square',
						id: 'twitter'
					},
					{
						name: 'linkedin',
						link: 'xyz',
						icon: 'fa fa-linkedin-square',
						id: 'linkedIn'
					},
					{
						name: 'github',
						link: 'xyz',
						icon: 'fa fa-github-alt'
					}
				],
				path: '/userDashboard',
				disabled: false,
				id: 'user'
			}
		],
		iconSize: 12,
		iconColor: '',
		iconClass: '',
		userNameSize: '',
		userNameColor: '',
		userNameClass: '',
		userDesignationSize: '',
		userDesignationColor: '',
		userDesignationClass: '',
		userImgClass: 'img-default',
		widgetCustomClass: 'img-default',
		links: '',
		title: 'OPTION#1-',
		titleSize: '',
		titleColor: '',
		titleCustomClass: '',
		titleId: 'OPTION#1',
		contentOne: 'Project A',
		contentOneId: 'contentOneId',
		contentOneSize: '',
		contentOneColor: '',
		contentOneCustomClass: '',
		imgClass: '',
		labelOne: 'Votes',
		labelOneSize: '',
		labelOneColor: '',
		labelOneCustomClass: '',
		labelOneId: 'votes',
		contentTwo: '',
		contentTwoId: 'contentTwoId',
		contentTwoSize: '',
		contentTwoColor: '',
		contentTwoCustomClass: '',
		labelTwo: 'Propsal Option Outline',
		labelTwoSize: '',
		labelTwoColor: '',
		labelTwoCustomClass: '',
		labelTwoId: 'labelTwoId',
		outline: '',
		outlineSize: '',
		outlineColor: '',
		outlineCustomClass: '',
		outlineId: 'OptionOutline',
		labelThree: 'Full Team',
		labelThreeSize: '',
		labelThreeColor: '',
		labelThreeCustomClass: '',
		labelThreeId: 'fullTeam',
		labelFour: 'Additional Resources',
		labelFourSize: '',
		labelFourColor: '',
		labelFourCustomClass: '',
		labelFourId: 'Resources',
		linksKey: 'link'
	};

	@Output() soacialAction = new EventEmitter();
	@ViewChild('myCarousel') myCarousel: NguCarouselStore;
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 2, sm: 3, md: 3, lg: 4, all: 0 },
		slide: 4,
		speed: 400,
		point: {
			visible: true
		},
		load: 4,
		touch: true,
		easing: 'ease'
	};

	constructor(
		public dialogCustomRef: MatDialogRef<SukuOptionModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit() {
		console.log('Current data', this.data, this.screenWidth);
		for (const key of Object.keys(this.data)) {
			if (this.data[key]) {
				console.log(this.data[key], key);
				this.modalData[key] = this.data[key];
			}
		}
		console.log('modalData', this.modalData);
	}

	public carouselTileLoad(evt: any) {
		console.log('event', evt);
	}

	onClickLeft() {
		const rem = (this.data.teamMembers.length + 1) % 2;
		this.slideIndex = this.slideIndex - 2 - (rem == 0 ? 2 : rem);
		console.log('slides--left');
	}

	onClickRight() {
		const rem = (this.data.teamMembers.length + 1) % 2;
		this.slideIndex = this.slideIndex + 2 + (rem == 0 ? 2 : rem);
		console.log('slides--left', (this.data.teamMembers.length + 1) % 2);
	}
}
