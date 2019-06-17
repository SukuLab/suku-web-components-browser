import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SukuOptionModalComponent } from './suku-option-modal.component';
@Injectable({
	providedIn: 'root'
})
export class SukuModalService {
	public dialogWidth;
	public dialogHeight;
	constructor(public dialogService: MatDialog) {
		this.dialogHeight = 'auto';
		this.dialogWidth = '640px';
	}

	public openInfoModal(data) {
		const dialogRef = this.dialogService.open(SukuOptionModalComponent, {
			width: this.dialogWidth,
			height: this.dialogHeight,
			data: {
				title: data.title,
				titleSize: data.titleSize,
				titleColor: data.titleColor,
				titleCustomClass: data.titleCustomClass,
				titleId: data.titleId,
				contentOne: data.contentOne,
				contentOneId: data.contentOneId,
				contentOneSize: data.contentOneSize,
				contentOneColor: data.contentOneColor,
				contentOneCustomClass: data.contentOneCustomClass,
				imgClass: data.imgClass,
				labelOne: data.labelOne,
				labelOneSize: data.labelOneSize,
				labelOneColor: data.labelOneColor,
				labelOneCustomClass: data.labelOneCustomClass,
				labelOneId: data.labelOneId,
				contentTwo: data.contentTwo,
				contentTwoId: data.contentTwoId,
				contentTwoSize: data.contentTwoSize,
				contentTwoColor: data.contentTwoColor,
				contentTwoCustomClass: data.contentTwoCustomClass,
				labelTwo: data.labelTwo,
				labelTwoSize: data.labelTwoSize,
				labelTwoColor: data.labelTwoColor,
				labelTwoCustomClass: data.labelTwoCustomClass,
				labelTwoId: data.labelTwoId,
				outlineSize: data.outlineSize,
				outlineColor: data.outlineColor,
				outlineCustomClass: data.outlineCustomClass,
				outlineId: data.outlineId,
				labelThree: data.labelThree,
				labelThreeSize: data.labelThreeSize,
				labelThreeColor: data.labelThreeColor,
				labelThreeCustomClass: data.labelThreeCustomClass,
				labelThreeId: data.labelThreeId,
				labelFour: data.labelFour,
				labelFourSize: data.labelFourSize,
				labelFourColor: data.labelFourColor,
				labelFourCustomClass: data.labelFourCustomClass,
				labelFourId: data.labelFourId,
				companyLogo: data.companyLogo,
				teamMembers: data.teamMembers,
				iconSize: data.iconSize,
				iconColor: data.iconColor,
				iconClass: data.iconClass,
				userNameSize: data.userNameSize,
				userNameColor: data.userNameColor,
				userNameClass: data.userNameClass,
				userDesignationSize: data.userDesignationSize,
				userDesignationColor: data.userDesignationColor,
				userDesignationClass: data.userDesignationClass,
				userImgClass: data.userImgClass,
				widgetCustomClass: data.widgetCustomClass,
				links: data.links,
				outline: data.outline,
				linksKey: data.linksKey
			}
		});
		dialogRef.afterClosed().subscribe((result) => {});
	}
}
