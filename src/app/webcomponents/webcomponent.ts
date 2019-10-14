import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/* text components start */
import * as d3 from 'd3';

@Component({
	selector: 'suku-heading',
	template: `<h1 [style.font-size.px]="size" [class]="customclass" [style.font-weight]="weight" [style.color]="color" id="{{id}}">
  <ng-content></ng-content>
  </h1>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuHeadingComponent {
	@Input() id = 'heading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass = '';
}

@Component({
	selector: 'suku-sub-heading',
	template: `
  <h2 [style.font-size.px]="size" [class]="customclass" id="{{id}}" [style.font-weight]="weight" [style.color]="color">
  <ng-content></ng-content>
  </h2>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuSubHeadingComponent {
	@Input() id = 'subheading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass = '';
}

@Component({
	selector: 'suku-home-heading',
	template: `
  <h3 [style.font-size.px]="size" [style.color]="color" id="{{id}}" [class]="customclass" [style.font-weight]="weight">
  <ng-content></ng-content>
  </h3>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuHomeHeadingComponent {
	@Input() id = 'homeHeading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass;
}

@Component({
	selector: 'suku-home-italic-heading',
	template: `
  <h5 [style.font-size.px]="size" [style.color]="color" id="{{id}}" [class]="customclass" [style.font-weight]="weight">
  <ng-content></ng-content>
  </h5>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuHomeItalicHeadingComponent {
	@Input() id = 'homeItalicHeading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass;
}

/* text component end */

/* for rendering in innerhtml  */
@Component({
	selector: 'suku-nest-heading',
	template: `<h1 [style.font-size.px]="size" [class]="customclass" [style.font-weight]="weight" [style.color]="color" id="{{id}}">
  {{name}}
  </h1>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuHeadingNestComponent {
	@Input() name;
	@Input() id = 'heading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass = '';
}

@Component({
	selector: 'suku-sub-nest-heading',
	template: `
  <h2 [style.font-size.px]="size" [class]="customclass" id="{{id}}" [style.font-weight]="weight" [style.color]="color">
  {{name}}
  </h2>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuSubNestHeadingComponent {
	@Input() name;
	@Input() id = 'heading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass;
}
/* for rendering in innerhtml end */

@Component({
	selector: 'suku-card-title',
	template: `
  <div class="col">
  <suku-sub-nest-heading name="{{cardTitle}}" size="{{cardTitleSize}}" weight="{{cardTitleWeight}}" color="{{cardTitleColor}}"></suku-sub-nest-heading>
  <suku-nest-heading name="{{cardContent}}" size="{{cardContentSize}}" weight="{{cardContentWeight}}" color="{{cardContentColor}}"></suku-nest-heading>
  </div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuCardTitleComponent {
	@Input('card-title') cardTitle = 'INTEREST NAME';
	@Input('card-title-size') cardTitleSize = '12';
	@Input('card-title-weight') cardTitleWeight = '400';
	@Input('card-title-color') cardTitleColor = '#b6b6b6';
	@Input('card-content') cardContent = 'Spring Cases';
	@Input('card-content-size') cardContentSize = '17';
	@Input('card-content-weight') cardContentWeight = '700';
	@Input('card-content-color') cardContentColor = '#1d1d1d';
}

@Component({
	selector: 'suku-card-list',
	template: `
  <div class="col">
  <suku-sub-nest-heading name="{{cardTitle}}" size="{{cardTitleSize}}" weight="{{cardTitleWeight}}" color="{{cardTitleColor}}"></suku-sub-nest-heading>
  <suku-sub-nest-heading name="{{cardContent}}" size="{{cardContentSize}}" weight="{{cardContentWeight}}" color="{{cardContentColor}}"></suku-sub-nest-heading>
  </div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuCardListComponent {
	@Input() cardTitle = 'INTEREST NAME';
	@Input() cardTitleSize = '12';
	@Input() cardTitleWeight = '400';
	@Input() cardTitleColor = '#b6b6b6';
	@Input() cardContent = 'Spring Cases';
	@Input() cardContentSize = '17';
	@Input() cardContentWeight = '700';
	@Input() cardContentColor = '#1d1d1d';
}

@Component({
	selector: 'suku-add-widget',
	template: `
    <a (click)="action.emit()">
      <span><img src="{{image}}"  width="33px" height="33px">
      <span [style.font-size.px]="size" [style.color]="color"
      [class]="customclass" [style.font-weight]="weight">
      <ng-content></ng-content>
      </span>
      </span>
    </a>
  `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuAddWidgetComponent {
	@Input() image = '../../assets/images/plus-icon-gold.png';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass = 'ml-2 add-widget mt-1';
	@Output() action = new EventEmitter();
}

// assets-components start
@Component({
	selector: 'suku-mail-widget',
	template: `
  <span class="row">
  <img src="../../../assets/images/mail-light.svg">
  <suku-sub-nest-heading name="{{name}}" size="{{size}}" color="{{color}}" weight="{{weight}}" class="{{customclass}} c-pointer" >
  </suku-sub-nest-heading>
  </span>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuMailWidgetComponent {
	@Input() name = 'dconway@suku.world';
	@Input() size = '14';
	@Input() color = '#3e3e3e';
	@Input() weight = '500';
	@Input() customclass = 'pt-1 pl-2';
}

@Component({
	selector: 'suku-phone-widget',
	template: `
  <span class="row">
  <img src="../../assets/images/phone-light.png" height="20px" class="mt-1">
  <suku-sub-nest-heading name="{{number}}" size="{{size}}" color="{{color}}" weight="{{weight}}" class="{{customclass}}" >
  </suku-sub-nest-heading>
  </span>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuPhoneWidgetComponent {
	@Input() number = '4806069863';
	@Input() size = '14';
	@Input() color = '#3e3e3e';
	@Input() weight = '500';
	@Input() customclass = 'pl-2 pt-1 c-pointer';
}

@Component({
	selector: 'suku-address-widget',
	template: `
  <span class="row">
  <img src="../../../assets/images/map-pin.svg">
  <suku-sub-nest-heading name="{{name}}" size="{{size}}" color="{{color}}" weight="{{weight}}" class="{{customclass}} c-pointer" >
  </suku-sub-nest-heading>
  </span>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuAddressWidgetComponent {
	@Input() name = '9315 NW 112TH AVE';
	@Input() size = '14';
	@Input() color = '#3e3e3e';
	@Input() weight = '500';
	@Input() customclass = 'pt-1 pl-2';
}

@Component({
	selector: 'suku-inline-dropdown',
	template: `
  <span class="row c-pointer" (click)="action.emit()">
  <suku-sub-nest-heading size="{{size}}" name="{{name}}" weight="{{weight}}" class="{{customclass}}" color="{{color}}">
    </suku-sub-nest-heading>
    <i class="fa fa-chevron-circle-down f10" style="color:#a7bf2e"></i>
</span>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuInlineDropDownComponent {
	@Input() name = 'View Details';
	@Input() size = '14';
	@Input() color = '#757575';
	@Input() weight = '600';
	@Input() customclass = 'pr-2 c-pointer';
	@Output() action = new EventEmitter();
}
// assets-components end

@Component({
	selector: 'suku-link',
	template: `
   <span [style.font-size.px]="size" [style.color]="color" (click)="action.emit()" [class]="customClass" [style.font-weight]="weight">
   <ng-content></ng-content>
   </span>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuLinkComponent {
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customClass = 'clearAll c-pointer';
	@Output() action = new EventEmitter();
}

@Component({
	selector: 'suku-select-input',
	template: `
  <div class="form-group">
  <div class="select-out2 input-group">
    <label for="exampleselect3" class="bmd-label-floating mr-3">{{title}}</label>
    <select class="optionsBox form-control fcontrol mt-2" id="interestTwo" name="sort" #addRe (change)="sort.emit(addRe.value)">
      <option value="default" disabled>Choose sort method</option>
      <option *ngFor="let option of options;let i=index" value="{{option.value}}">{{option.name}}</option>
    </select>
  </div>
</div>
`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuSelectInputComponent {
	@Input() title = 'SORT BY';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customClass;
	@Output() sort = new EventEmitter();
	@Input() options;
	constructor() {
		this.options = [
			{
				name: 'Matches-Low to High',
				value: 4
			},
			{
				name: 'Matches-High to Low',
				value: 2
			},
			{
				name: 'Z to A',
				value: 1
			},
			{
				name: 'A to Z',
				value: 0
			}
		];
	}
}
// text-components end

@Component({
	selector: 'suku-home-widget',
	template: `
   <div class="col widget" [style.background-color]="bgColor" [style.color]="color" (click)="routerLink.emit()">
  <label class="pt-2 pb-2 c-pointer" id="{{id}}"><ng-content></ng-content></label>
   </div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuHomeWidgetComponent {
	@Input() name;
	@Input() id;
	@Input() color = '#f1f4f5';
	@Input() bgColor = '#76767b';
	@Output() routerLink = new EventEmitter();
}

@Component({
	selector: 'suku-dashboard-profile',
	template: `
     <div class="profileBox">
    <div class="col-md-12 col-sm-12 text-center">
      <img class="circle mb-4 mt-4" id="image" src="{{image}}" alt="PROFILE">
    </div>
    <div class="col-md-12 col-sm-12 text-center">
      <label class="userName">
        <b>{{ userName || 'Emery' }}</b>
      </label>
    </div>
    <div class="bLine form-group"></div>
    <div class="col-sm-12 col-md-12"  id="newSellList">
      <div class="row c-pointer ">
        <div class="p-3 col mb-1" >
        <img src="{{icon}}" alt="icon" height="33px" width="33px">
        <span class="create-interest-listing pl-2 pt-3" (click)="createNewList.emit(1)">{{titleOne || 'CREATE NEW LISTING'}} </span>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 form-group"  id="newBuyInterest">
      <div class="row c-pointer ">
        <div class="p-3 col mb-2" >
        <img src="{{icon}}" alt="icon" height="33px" width="33px">
        <span class="create-interest-listing pl-2 pt-3">{{titleTwo || 'CREATE NEW INTEREST'}}</span>
        </div>
        </div>
    </div>
  </div>
  `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuDashboardProfileComponent {
	@Input('user-name') userName;
	@Input() image = '../../assets/images/browser.png';
	@Input() icon = '../../assets/images/plus-icon.png';
	@Input('title-one') titleOne;
	@Input('title-two') titleTwo;
	@Output('action-one') createNewList = new EventEmitter();
	@Output('action-two') clearBuyInterestStorage = new EventEmitter();
	test(i) {
		alert(i);
	}
}

@Component({
	selector: 'suku-notification-widget',
	template: `
    <div class="col p-0 box pointer text-center removeDecoration">
      <div class="pt-3 pb-2 mb-3">
        <strong>
          <a class="box-title removeDecoration" id="{{id}}">
          {{notificationTitle || 'review bids' }}
          </a>
        </strong>
      </div>
      <div class="pb-4">
        <strong class="box-counter">
        {{ notificationValue > 9 ? ' ' :
         '0'}}{{ notificationValue === 0 ? 0 :
         ''}}{{notificationValue}}
         </strong>
      </div>
  </div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuNotificationBoxComponent {
	@Input() id;
	@Input() notificationTitle;
	@Input() notificationValue;
}

@Component({
	selector: 'suku-filters',
	template: `
  <div class="side-bar" [formGroup]="form">
  <div class="filter-title">
    <a class="collapsed f30" data-toggle="collapse" href=".collapse-filter"></a>
  </div>
  <div class="collapse-filter collapse" id="collapse-filter">
    <div class="box">
      <div class="filter-list">
        <h2>{{filterHeading}}</h2>
        <div class="options pl-3">
         <div *ngFor="let status of statusTypesDynamic; let l = index">
            <mat-checkbox color="primary" [checked]="status.checked" (change)="(status.checked = $event.checked); filterOnChange.emit(status.key,status.value, $event);">
              {{status.displayName}}</mat-checkbox>
            <div *ngIf="status.hasSub && status.checked">
              <div class="col-sm-12" *ngFor="let subStatus of status.sub; let sk = index">
                <mat-checkbox [checked]="subStatus.checked" (change)="(subStatus.checked = $event.checked); filterOnChange.emit(subStatus.key,subStatus.value, $event);"
                  color="primary"> {{subStatus.displayName}}</mat-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 mt-4 mb-1" >
            <h3>{{filterSubHeading}}</h3>
            <div class="pb-0 mt-3">From</div>
            <mat-form-field class="pt-0">
              <input matInput [matDatepicker]="picker"  placeholder="Choose a date"
              id="fromDateMyPro" formControlName="fromDate" name="fromDate" >
              <mat-datepicker-toggle matSuffix [for]="picker" ></mat-datepicker-toggle>
              <mat-datepicker #picker  ></mat-datepicker>
            </mat-form-field>
            <div class="mt-3 pb-0">To</div>
            <mat-form-field>
              <input matInput  formControlName="tillDate"  [matDatepicker]="picker1"
              placeholder="Choose a date" id="tillDateMyPro" name="tillDate" >
              <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
              <mat-datepicker #picker1></mat-datepicker>
            </mat-form-field>
          </div>
      </div>
      <div class="p-3 pb-4 pl-5 pr-5">
        <button type="button" class=" btn btn-info btn-lg btn-block" (click)="applyFilter.emit()"> Apply
          Filters</button>
      </div>
      <div class="filter-links">
        <p>
          <a (click)="selectAll.emit();">SELECT ALL</a>
          <a (click)="deselectAll.emit();">CLEAR ALL</a>
        </p>
      </div>
    </div>
  </div>
  </div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuFiltersComponent {
	@Input() form: FormGroup;
	@Input() filterHeading;
	@Input() filterSubHeading;
	@Input() statusTypesDynamic: any[];
	@Output() filterOnChange = new EventEmitter();
	@Output() applyFilter = new EventEmitter();
	@Output() selectAll = new EventEmitter();
	@Output() deselectAll = new EventEmitter();
}

@Component({
	selector: 'suku-info-button',
	template: `
  <button class="btn btn-info btn-lg btn-block" id="{{id}}" (click)="action.emit()">
    <ng-content></ng-content>
  </button>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuInfoButtonComponent {
	@Input() name;
	@Input() id;
	@Output() action = new EventEmitter();
}

@Component({
	selector: 'suku-primary-button',
	template: `
  <button class="btn-p btn-primary" id="{{id}}" (click)="action.emit()">
    <ng-content></ng-content>
   </button>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuPrimaryButtonComponent {
	@Input() name;
	@Input() id;
	@Output() action = new EventEmitter();
}

@Component({
	selector: 'suku-secondary-button',
	template: `
  <a class="secondary-btn" id="{{id}}" (click)="action.emit()">
  <ng-content></ng-content>
   </a>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuSecondaryButtonComponent {
	@Input() name;
	@Input() id;
	@Output() action = new EventEmitter();
}

@Component({
	selector: 'suku-default-button',
	template: `
  <a class="default-btn" id="{{id}}" (click)="action.emit()">
    <ng-content></ng-content>
  </a>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuDefaultButtonComponent {
	@Input() id = 'default';
	@Output() action = new EventEmitter();
}

@Component({
	selector: 'suku-progress-bar',
	template: `
  <table class="col-sm-10 offset-sm-1">
  <tr class="pt-3">
    <td class="{{progressStyleOne}} text-center">
      <i *ngIf="(progressStyleOne == 'progressCompleted')" class="fa fa-check tickSign"></i>
      <span *ngIf="!(progressStyleOne == 'progressCompleted')">1</span>
    </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleTwo}} text-center">
    <i *ngIf="(progressStyleTwo == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleTwo == 'progressCompleted')">2</span>
  </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleThree}} text-center">
    <i *ngIf="(progressStyleThree == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleThree == 'progressCompleted')">3</span>
  </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleFour}} text-center">
    <i *ngIf="(progressStyleFour == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleFour == 'progressCompleted')">4</span>
  </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleFive}} text-center">
    <i *ngIf="(progressStyleFive == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleFive == 'progressCompleted')">5</span>
  </td>
  </tr>
</table>
 <table class="col-sm-12 text-center">
  <tr id="txt" class="pt-3">
    <td >
      {{headingOne}}
    </td>
    <td>
      {{headingTwo}}
    </td>
    <td>
    {{headingThree}}
    </td>
    <td>
    {{headingFour}}
    </td>
    <td>
    {{headingFive}}
    </td>
  </tr>
</table>
  `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuProgressBarComponent {
	@Input('progress-style-one') progressStyleOne = 'progressCompleted';
	@Input('progress-style-two') progressStyleTwo = 'progressActive';
	@Input('progress-style-three') progressStyleThree = 'progressUpcoming';
	@Input('progress-style-four') progressStyleFour = 'progressUpcoming';
	@Input('progress-style-five') progressStyleFive = 'progressUpcoming';
	@Input('first-heading') headingOne = 'first heading';
	@Input('second-heading') headingTwo = 'second heading';
	@Input('third-heading') headingThree = 'third heading';
	@Input('fourth-heading') headingFour = 'fourth heading';
	@Input('fifth-heading') headingFive = 'fifth heading';
	@Input('first-heading-id') headingOneId = 'firstHeading';
	@Input('second-heading-id') headingTwoId = 'secondHeading';
	@Input('third-heading-id') headingThreeId = 'thirdHeading';
	@Input('fourth-heading-id') headingFourId = 'fourthHeading';
	@Input('fifth-heading-id') headingFiveId = 'fifthHeading';
}

@Component({
	selector: 'suku-checkbox',
	template: `
  <mat-checkbox id="{{id}}">
  <ng-content></ng-content>
  </mat-checkbox>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuCheckboxComponent {
	@Input() id;
}

@Component({
	selector: 'suku-radio-button',
	template: `
   <span>
   <mat-radio-group>
   <mat-radio-button color="{{color}}" value="{{sukuOne}}">{{Title}}
   </mat-radio-button>
   </mat-radio-group>
   </span>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuRadioButtonComponent {
	@Input() Title = 'Suku Radio Button';
	@Input() sukuOne = 'sukuOne';
	@Input() checked = 'true';
	@Input() color = 'primary';
}

@Component({
	selector: 'suku-star-badge',
	template: `
  <div class="star">
  <img src="../../../assets/images/star_2.svg" alt="star-image" id="star-image">
  <h2 class="star-txt text-center" id="value"><ng-content></ng-content></h2>
  </div>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuStarBadgeComponent {
	@Input() icon = '../../../assets/images/star_2.svg';
	@Input() value = 1;
}

@Component({
	selector: 'suku-rating-star',
	template: `
  <span (change)="action.emit(ratingValue)">
  <div [innerHTML]="myHTML" [class]="customclass" ratingValue=""></div>
  </span>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuRatingComponent {
	myHTML;
	_rate = 0;
	@Output() action = new EventEmitter();
	@Input() customclass;
	@Input('rating-value')
	set ratingValue(ratingValue: number) {
		this._rate = ratingValue;
		console.log('', this._rate);
		this.callOfStarts(this._rate);
	}
	callOfStarts(e) {
		switch (true) {
			case e == 0:
				this.myHTML = `
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
				break;

			case e <= 0.5:
				this.myHTML = `
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
				break;

			case e > 0.5 && e <= 1:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 1.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 1.5 && e <= 2:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 2.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 2.5 && e <= 3:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 3.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 3.5 && e <= 4:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 4.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
    </div>`;
				break;
			case e > 4.5 && e <= 5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
       </div>`;
				break;
			default:
				break;
		}
	}
}

@Component({
	selector: 'suku-rating-widget',
	template: `
  <div class="col  bg-color p-3">
  <div class="row bg-white p-3 m-3">
    <div class="col-sm-3">
      <div class="col-sm-12 p-0">
       <div [innerHTML]="myHTML" ratingValue="">
       </div>
      </div>
      <div class="col-sm-12 p-0">
        <suku-sub-nest-heading size="{{size}}" weight="{{weight}}" color="{{color}}" name="{{users}}"></suku-sub-nest-heading>
      </div>
    </div>
    <div class="col-sm-9">
      <suku-sub-nest-heading size="{{commentSize}}" weight="{{commentWeight}}" color="{{commentColor}}"
      name="{{comment}}"></suku-sub-nest-heading>
    </div>
  </div>
</div>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuRatingLineItemComponent {
	@Input() size = 14;
	@Input() weight = 500;
	@Input() color = '#757575';
	@Input() users = 'USER L | 5/28';
	@Input('comment-size') commentSize = 14;
	@Input('comment-weight') commentWeight = 500;
	@Input('comment-color') commentColor = '#3e3e3e';
	@Input()
	comment = 'Rating content can run up to a few paragraphs.Rating content can run up to a few paragraphs.Rating content can run up to a few paragraphs.Rating content can run up to.';
	@Output() rating = new EventEmitter();
	myHTML;
	_rate = 0;
	@Input()
	set ratingValue(ratingValue: number) {
		this._rate = ratingValue;
		console.log('', this._rate);
		this.callOfStarts(this._rate);
	}
	constructor() {
		this.callOfStarts(this._rate);
	}
	callOfStarts(e) {
		switch (true) {
			case e == 0:
				this.myHTML = `
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
       `;
				break;

			case e <= 0.5:
				this.myHTML = `
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
       `;
				break;

			case e > 0.5 && e <= 1:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e <= 1.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e > 1.5 && e <= 2:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e <= 2.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e > 2.5 && e <= 3:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e <= 3.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e > 3.5 && e <= 4:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>  `;
				break;

			case e <= 4.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
     `;
				break;
			case e > 4.5 && e <= 5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
        `;
				break;
			default:
				break;
		}
	}
}

@Component({
	selector: 'suku-search-input',
	template: `
  <div id="search_container" class="col-sm-3 p-0 d-flex">
    <input type="text" id="search" class="stretch" value>
    <img src="{{icon}}" [class]="customClass" width="8%" height="10%">
   </div>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuSearchInputComponent {
	@Input() formRadio: FormGroup;
	@Input() icon = '../../assets/images/search-icon.svg';
	@Input() customClass = 'float-right m-2 mr-3 c-pointer';
}

@Component({
	selector: 'suku-bid-info',
	template: `
  <span class="row">
    <span class="m-2 mr-3">
      <suku-nest-heading name="{{bids}}" color="{{bidColor}}" size="{{bidSize}}" weight="{{bidWeight}}">
      </suku-nest-heading>
      <suku-sub-nest-heading name="{{bidHeading}}" color="{{bidHeadingColor}}" size="{{bidHeadingSize}}"
       weight="{{bidHeadingWeight}}">
        </suku-sub-nest-heading>
    </span>
    <span class="m-2 mr-3">
      <suku-nest-heading name="{{percent}}" color="{{percentColor}}" size="{{percentSize}}" weight="{{percentWeight}}">
      </suku-nest-heading>
      <suku-sub-nest-heading name="{{percentHeading}}" color="{{percentHeadingColor}}" size="{{percentHeadingSize}}"
       weight="{{percentHeadingWeight}}">
        </suku-sub-nest-heading>
    </span>
  </span>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuBidInfoComponent {
	@Input() bids = '374';
	@Input('bid-size') bidSize = '17';
	@Input('bid-color') bidColor = 'black';
	@Input('bid-weight') bidWeight = '600';
	@Input('bid-heading') bidHeading = 'bids';
	@Input('bid-heding-size') bidHeadingSize = '14';
	@Input('bid-heading-color') bidHeadingColor = 'black';
	@Input('bid-heading-weight') bidHeadingWeight = '500';

	@Input() percent = '10%';
	@Input('percentage-size') percentSize = '17';
	@Input('percentage-color') percentColor = 'black';
	@Input('percentage-weight') percentWeight = '600';
	@Input('percentage-heading') percentHeading = 'fulfill';
	@Input('percentage-heading-size') percentHeadingSize = '14';
	@Input('percentage-heading-color') percentHeadingColor = 'black';
	@Input('percentage-heading-weight') percentHeadingWeight = '500';
}

@Component({
	selector: 'suku-nav-submenu',
	template: `
  <div class="header-main">
  <div class="sub-menu-bar navBarRes" *ngIf="true">
    <div class="container">
      <div class="sub-menu">
        <nav>
          <ul class="mt-3" id="subMenu">
            <li [ngClass]="{'active': selectedItem == item}" (click)="subMenuSelected($event, item)" *ngFor="let item of subMenuList">
              <a class="c-pointer">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
    `,
	styleUrls: ['./webcomponents.scss']
})
export class SukuNavSubmenuComponent {
	subMenuList = [];
	selectedItem: any;
	constructor() {
		this.subMenuList = [
			{
				name: 'Listings & Bids',
				id: 1
			},
			{
				name: 'Negotiations',
				id: 2
			},
			{
				name: 'Purchase Orders',
				id: 3
			},
			{
				name: 'Transactions',
				id: 4
			}
		];
	}
	subMenuSelected(event, newValue) {
		console.log(newValue);
		this.selectedItem = newValue;
	}
}

@Component({
	selector: 'suku-card-line',
	template: `
  <span>
  <div class="col p-0">
  <div class="row card-line-bg p-3 m-3 c-pointer" [style.background-color]=" bgColor">
    <div class="col-sm-1 mt-1 pt-1">
      <img [class]="customClass" src="{{ image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SapkQj0Aefd_ufiiGrDR-dNd32O0yqgGW3g-AMGGSFaOQP-k6g'}}" alt="card-img" width="49px" height="49px">
    </div>
    <div class="col-sm-1" *ngIf="msgStatus=='read'">
      <img [class]="customIconClass || 'text-center mt-3' " src="{{ chatReadIcon || '../../../assets/img/msg_read.png'}}" alt="card-img" width="40px" height="42px">
    </div>
    <div class="col-sm-1" *ngIf="msgStatus=='unRead'">
      <img [class]="customIconClass || 'text-center mt-3' " src="{{ chatUnreadIcon || '../../../assets/img/msg_unread.png'}}" alt="card-img" width="40px" height="42px">
    </div>
    <div class="col-sm-1" *ngIf="( msgStatus !='unRead' &&  msgStatus !='read') ">
      <a [class]="customIconClass || 'text-center mt-3' " ></a>
    </div>
    <div class="col-sm-6 pt-3">
      <suku-sub-nest-heading size="{{ titleOneSize || '14' }}" weight="{{ titleOneWeight || '600' }}" color="{{ titleOneColor || 'black'}}" name="{{ titleOne || 'Title One'}}"></suku-sub-nest-heading>
      <suku-sub-nest-heading size="{{ contentOneSize || '14' }}" weight="{{ contentOneWeight || '500'}}" color="{{ contentOneColor || '#3e3e3e'}}" name="{{ contentOne || '10 SUKU'}}"></suku-sub-nest-heading>
    </div>
    <div class="col-sm-2 pt-3">
        <suku-sub-nest-heading size="{{ subTitleTwoSize || '12'}}" weight="{{ subTitleTwoWeight || '500'}}" color="{{ subTitleTwoColor || '#b6b6b6'}}" name="{{ subTitleTwo || 'SOLD BY'}}"></suku-sub-nest-heading>
        <suku-sub-nest-heading size="{{ contentTwoSize || '14'}}" weight="{{ contentTwoWeight || '500'}}" color="{{ contentTwoColor || '#3e3e3e'}}" name="{{ contentTwo || 'John Smith'}}"></suku-sub-nest-heading>
    </div>
    <div class="col-sm-2 pt-3">
        <suku-sub-nest-heading size="{{ subTitleThreeSize || '12' }}" weight="{{ subTitleThreeWeight || '500'}}" color="{{ subTitleThreeColor || '#b6b6b6'}}" name="{{ subTitleThree || 'EXPIRY DATE'}}"></suku-sub-nest-heading>
        <suku-sub-nest-heading size="{{ contentThreeSize || '14'}}" weight="{{ contentThreeWeight || '500'}}" color="{{ contentThreeColor || '#3e3e3e'}}" name="{{ contentThree || '28 Nov 2018'}}"></suku-sub-nest-heading>
      </div>
  </div>
</div>
</span>
    `,
	styleUrls: ['./webcomponents.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SukuCardLineComponent {
	@Input() image = '';
	@Input() customClass = '';
	@Input() bgColor = 'card-line-bg';
	@Input() msgStatus = 'read';

	@Input() chatReadIcon = '';
	@Input() chatUnreadIcon = '';
	@Input() customIconClass = '';

	@Input() titleOne = 'Title One';
	@Input() titleOneColor = 'black';
	@Input() titleOneWeight = '600';
	@Input() titleOneSize = '14';
	@Input() contentOne = '10 SUKU';
	@Input() contentOneColor = '#3e3e3e';
	@Input() contentOneWeight = '500';
	@Input() contentOneSize = '14';

	@Input() subTitleTwo = 'SOLD BY';
	@Input() subTitleTwoColor = '#b6b6b6';
	@Input() subTitleTwoWeight = '500';
	@Input() subTitleTwoSize = '12';
	@Input() contentTwo = 'John Smith';
	@Input() contentTwoColor = '#3e3e3e';
	@Input() contentTwoWeight = '500';
	@Input() contentTwoSize = '14';

	@Input() subTitleThree = 'EXPIRY DATE';
	@Input() subTitleThreeColor = '#b6b6b6';
	@Input() subTitleThreeWeight = '500';
	@Input() subTitleThreeSize = '12';
	@Input() contentThree = '28 Nov 2018';
	@Input() contentThreeColor = '#3e3e3e';
	@Input() contentThreeWeight = '500';
	@Input() contentThreeSize = '14';
}

@Component({
	selector: 'suku-match-chip',
	template: `
  <div class="col-sm-3 p-0">
  <div class="col-sm-10 p-0">
    <div class="col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0">
      <a id="matchhun">
        <img (click)="match.emit()"
        src="{{image}}"
          class="m-1" width="75%" height="120px" alt="Image"> </a>
      <br>
      <div class="col-sm-12 p-0 border-top-box pt-3 text-center ">
        <suku-sub-nest-heading size="{{listNameSize}}" weight="{{listWeight}}" color="{{listColor}}"
         name="{{listName}}"></suku-sub-nest-heading>
        <suku-sub-nest-heading size="{{prizeSize}}" weight="{{prizeWeight}}" color="{{prizeColor}}"
        name="{{prize}}"></suku-sub-nest-heading>
        <p class="pt-2">
          <suku-sub-nest-heading size="{{dateSize}}" weight="{{dateWeight}}" color="{{dateColor}}" name="{{date}}">
          </suku-sub-nest-heading>
          <suku-sub-nest-heading size="{{dateVSize}}" weight="{{dateVWeight}}" color="{{dateVColor}}" name="{{dateV}}">
          </suku-sub-nest-heading>
        </p>
        <p class="pt-2 pb-3">
          <suku-sub-nest-heading size="{{sellSize}}" weight="{{sellWeight}}" color="{{sellColor}}" name="{{sell}}">
          </suku-sub-nest-heading>
          <suku-sub-nest-heading size="{{sellVSize}}" weight="{{sellVWeight}}" color="{{sellVColor}}" name="{{sellV}}">
          </suku-sub-nest-heading>
        </p>
      </div>
    </div>
  </div>
</div>
`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuMatchChipComponent {
	@Input() image = '../../assets/images/manageTrack.png';
	@Output() match = new EventEmitter();
	@Input() listNameSize = '16';
	@Input() listWeight = '600';
	@Input() listColor = 'black';
	@Input() listName = 'Super Computer';
	@Input() prize = '10 SUKU';
	@Input() prizeSize = '14';
	@Input() prizeWeight = '500';
	@Input() prizeColor = '#3e3e3e';
	@Input() prizeCustomClass = 'mb-0';
	@Input() date = 'EXPIRY DATE';
	@Input() dateSize = '12';
	@Input() dateWeight = '500';
	@Input() dateColor = '#b6b6b6';
	@Input() dateCustomClass = '';
	@Input() dateV = '28 Nov 2018';
	@Input() dateVSize = '14';
	@Input() dateVWeight = '500';
	@Input() dateVColor = '#3e3e3e';
	@Input() dateVCustomClass = '';
	@Input() sell = 'SELLER';
	@Input() sellSize = '12';
	@Input() sellWeight = '500';
	@Input() sellColor = '#b6b6b6';
	@Input() sellCustomClass = '';
	@Input() sellV = 'John Smith';
	@Input() sellVSize = '14';
	@Input() sellVWeight = '500';
	@Input() sellVColor = '#3e3e3e';
	@Input() sellVCustomClass = '';
}

@Component({
	selector: 'suku-profile-widget',
	template: `<div class="col-sm-5">
  <div class="row">
    <div class="col-sm-5">
      <img src="{{image}}" class="rounded-circle image" alt="profile" width="150"
        height="150">
    </div>
    <div class="col-sm-7">
      <suku-nest-heading name="{{userName}}" weight="{{nameweight}}" customClass="{{namecustomclass}}"
       size="{{namesize}}" color="{{namecolor}}"></suku-nest-heading>
      <suku-sub-nest-heading name="{{accounttype}}" size="{{accountsize}}" customClass="{{accountcustomclass}}" weight="{{accountweight}}"
      color="{{accountcolor}}">
      </suku-sub-nest-heading>
      <suku-rating-star ratingValue="{{ratingvalue}}" customClass="{{ratingcustomclass}}">
      </suku-rating-star>
      <suku-sub-nest-heading name="{{ratedetails}}" weight="{{ratingweight}}" customClass="{{rdcustomclass}}">
      </suku-sub-nest-heading>
    </div>
  </div>
</div>`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuProfileWidgetComponent {
	@Input() image = '../../assets/images/browser.png';
	@Input('user-name') userName = 'Suku';
	@Input('name-weight') nameweight = '400';
	@Input('name-customclass') namecustomclass = 'mb-0 mt-1 pl-1';
	@Input('name-size') namesize = '33.4';
	@Input('name-color') namecolor = '';
	@Input('account-type') accounttype = 'Manufacturer';
	@Input('account-weight') accountweight = '400';
	@Input('account-customclass') accountcustomclass = 'pl-2';
	@Input('account-size') accountsize = '17';
	@Input('account-color') accountcolor = '';
	@Input('rating-value') ratingvalue = '5';
	@Input('rating-customclass') ratingcustomclass = 'pl-2 mb-2 pt-3';
	@Input('rate-details') ratedetails = 'based on 14 rating';
	@Input('rating-weight') ratingweight = '400';
	@Input('rd-customclass') rdcustomclass = 'pl-2';
}

@Component({
	selector: 'suku-input-control',
	template: `
  <div class="input-container">
  <mat-form-field>
    <input matInput placeholder="firstName" color="primary" type="text">
  </mat-form-field>
</div>
      `
})
export class SukuInputComponent {
	// @Input() control: AbstractControl;
	// @Input() label: string;
}

/* test components */

@Component({
	selector: 'suku-dynamic-input',
	template: `
    <form novalidate  [formGroup]="parentForm">
      <div *ngFor="let prop of objectProps">
        <label [attr.for]="prop">{{prop.label}}</label>

        <div [ngSwitch]="prop.type">
        <mat-form-field>
          <input matInput placeholder="suku input" (keyup)="push()" *ngSwitchCase="'text'"
            [formControlName]="prop.key"
            [id]="prop.key" [type]="prop.type">
          </mat-form-field>
        </div>
      </div>
    </form>
    <hr />
  `,
	styles: [
		`
    .error { color: red; }
    `
	]
})
export class DynamicFormComponent implements OnInit {
	@Input() dataObject;
	parentForm: FormGroup;
	objectProps;
	@Output() action = new EventEmitter();
	constructor() { }
	push() {
		const value = JSON.parse(this.parentForm.value);
		console.log('value', value);
		this.action.emit(value);
	}
	ngOnInit() {
		// remap the API to be suitable for iterating over it
		this.objectProps = Object.keys(this.dataObject).map((prop) => {
			return Object.assign({}, { key: prop }, this.dataObject[prop]);
		});

		// setup the form
		const formGroup = {};
		for (const prop of Object.keys(this.dataObject)) {
			formGroup[prop] = new FormControl(
				this.dataObject[prop].value || '',
				this.mapValidators(this.dataObject[prop].validation)
			);
		}

		this.parentForm = new FormGroup(formGroup);
	}

	private mapValidators(validators) {
		const formValidators = [];

		if (validators) {
			for (const validation of Object.keys(validators)) {
				if (validation === 'required') {
					formValidators.push(Validators.required);
				} else if (validation === 'min') {
					formValidators.push(Validators.min(validators[validation]));
				}
			}
		}

		return formValidators;
	}
}

/* test components */
@Component({
	selector: 'suku-response',
	template: `
  <div [class]="customClass" [style.background-color]="bgColor">
  <img src="../../assets/images/no_data.png">
  </div>
      `,
	styleUrls: ['./webcomponents.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SukuResponseComponent {
	@Input() customClass = 'filterResult text-center col';
	@Input() iconClass = 'fa fa-frown-o responseIcon';
	@Input() iconColor = '#c0ca33';
	@Input() content = 'no data available';
	@Input() bgColor = '';
}

@Component({
	selector: 'suku-track-progress-bar',
	template: `
  <table class="col-sm-6 offset-sm-3">
  <tr class="pt-3">
    <td class="{{progressStyleOne}} text-center">
      <i *ngIf="(progressStyleOne == 'progressCompleted')" class="fa fa-check tickSign"></i>
      <span *ngIf="!(progressStyleOne == 'progressCompleted')">1</span>
    </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleTwo}} text-center">
    <i *ngIf="(progressStyleTwo == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleTwo == 'progressCompleted')">2</span>
  </td>
    <td>
      <hr class="hrLine">
    </td>
    <td class="{{progressStyleThree}} text-center">
    <i *ngIf="(progressStyleThree == 'progressCompleted')" class="fa fa-check tickSign"></i>
    <span *ngIf="!(progressStyleThree == 'progressCompleted')">3</span>
  </td>
  </tr>
</table>
<table class="col-sm-8 offset-sm-2 text-center">
<tr id="txt">
	<td class="{{customHeadingOneClass}} progressTitle pt-3">
		{{headingOne}}
	</td>
	<td class="{{customHeadingTwoClass}} progressTitle pt-3">
		{{headingTwo}}
	</td>
	<td class="{{customHeadingThreeClass}} progressTitle pt-3">
	{{headingThree}}
	</td>
</tr>
</table>
`,
	styleUrls: ['./webcomponents.scss']
})
export class SukuTrackProgressBarComponent {
	@Input('progress-style-one') progressStyleOne = 'progressCompleted';
	@Input('progress-style-two') progressStyleTwo = 'progressActive';
	@Input('progress-style-three') progressStyleThree = 'progressUpcoming';
	@Input() headingOne = 'SELECT A PRODUCT';
	@Input() headingTwo = 'TRACE COMPONENTS';
	@Input() headingThree = 'SHOW TRACE';
	@Input() headingOneId = 'firstHeading';
	@Input() headingTwoId = 'secondHeading';
	@Input() headingThreeId = 'thirdHeading';
	@Input('custom-heading-one-class') customHeadingOneClass = '';
	@Input('custom-heading-two-class') customHeadingTwoClass = '';
	@Input('custom-heading-three-class') customHeadingThreeClass = '';
}

@Component({
	selector: 'suku-tree',
	template: `<div class="tree"></div>`,
	styleUrls: ['./webcomponents.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class SukuTreeComponent implements OnInit {
	@Input('tree-data') treeDataFromApi;
	// trace tree
	tree;
	root;
	i;
	svg;
	boxWidth = 180;
	boxHeight = 55;
	margin = {
		top: 50,
		right: 5,
		bottom: 50,
		left: 5
	};
	width = 1060 - this.margin.left - this.margin.right;
	height = 510 - this.margin.top - this.margin.bottom;
	data: any;
	testd: number;
	childCount: number = 0;
	max: any = 0;
	tree1: any;
	max1: number = 0;
	treeDataApi = [
		{
			uid: 'Lx1000',
			timestamp: '2019-01-21T11:41:31.921Z',
			product: {
				id: '1000',
				name: 'HP Pavilion DV6',
				description: 'HP Laptop'
			},
			parent: '',
			children: ['Lx1001', 'Lx2000'],
			graphLinks: [
				{
					_id: '5c45c0a07bccff62b4c83e63',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1008',
					product: {
						id: '1008',
						name: 'Fan Speed Controller Board',
						description: 'Motor Board'
					},
					links: [
						{
							_id: '5c45c0a07bccff62b4c83e64',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				},
				{
					_id: '5c45bf897bccff62b4c83e54',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx1004', 'Lx1005'],
					uid: 'Lx1003',
					product: {
						id: '1003',
						name: 'Intel CPU Cooler',
						description: 'CPU Cooler'
					},
					links: [
						{
							_id: '5c45bf897bccff62b4c83e55',
							uid: 'Lx1001',
							type: 'usedIn'
						},
						{
							_id: '5c45bfc47bccff62b4c83e59',
							uid: 'Lx1004',
							type: 'composedOf'
						},
						{
							_id: '5c45bfe67bccff62b4c83e5c',
							uid: 'Lx1005',
							type: 'composedOf'
						}
					],
					parent: 'Lx1001',
					__v: 0,
					depth: 1,
					relations: [
						{
							_id: '5c45bfc47bccff62b4c83e57',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1004',
							product: {
								id: '1004',
								name: 'CPU HeatSink',
								description: 'HeatSink'
							},
							links: [
								{
									_id: '5c45bfc47bccff62b4c83e58',
									uid: 'Lx1003',
									type: 'usedIn'
								}
							],
							parent: 'Lx1003',
							__v: 0,
							depth: 2,
							relations: []
						}
					]
				},
				{
					_id: '5c45bf6a7bccff62b4c83e51',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1002',
					product: {
						id: '1002',
						name: 'Intel I5 CPU Chip',
						description: 'CPU Chip'
					},
					links: [
						{
							_id: '5c45bf6a7bccff62b4c83e52',
							uid: 'Lx1001',
							type: 'usedIn'
						}
					],
					parent: 'Lx1001',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45b8d37bccff62b4c83e4e',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx1002', 'Lx1003'],
					uid: 'Lx1001',
					product: {
						id: '1001',
						name: 'Intel I5 CPU QuadCore',
						description: 'HP Laptop'
					},
					links: [
						{
							_id: '5c45b8d37bccff62b4c83e4f',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45bf6b7bccff62b4c83e53',
							uid: 'Lx1002',
							type: 'composedOf'
						},
						{
							_id: '5c45bf8a7bccff62b4c83e56',
							uid: 'Lx1003',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45bf6a7bccff62b4c83e51',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1002',
							product: {
								id: '1002',
								name: 'Intel I5 CPU Chip',
								description: 'CPU Chip'
							},
							links: [
								{
									_id: '5c45bf6a7bccff62b4c83e52',
									uid: 'Lx1001',
									type: 'usedIn'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45bf897bccff62b4c83e54',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: ['Lx1004', 'Lx1005'],
							uid: 'Lx1003',
							product: {
								id: '1003',
								name: 'Intel CPU Cooler',
								description: 'CPU Cooler'
							},
							links: [
								{
									_id: '5c45bf897bccff62b4c83e55',
									uid: 'Lx1001',
									type: 'usedIn'
								},
								{
									_id: '5c45bfc47bccff62b4c83e59',
									uid: 'Lx1004',
									type: 'composedOf'
								},
								{
									_id: '5c45bfe67bccff62b4c83e5c',
									uid: 'Lx1005',
									type: 'composedOf'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: [
								{
									_id: '5c45bfc47bccff62b4c83e57',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [],
									uid: 'Lx1004',
									product: {
										id: '1004',
										name: 'CPU HeatSink',
										description: 'HeatSink'
									},
									links: [
										{
											_id: '5c45bfc47bccff62b4c83e58',
											uid: 'Lx1003',
											type: 'usedIn'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c45bfe67bccff62b4c83e5a',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: ['Lx1006', 'Lx1007', 'Lx1008'],
									uid: 'Lx1005',
									product: {
										id: '1005',
										name: 'CPU Fan',
										description: 'Fan'
									},
									links: [
										{
											_id: '5c45bfe67bccff62b4c83e5b',
											uid: 'Lx1003',
											type: 'usedIn'
										},
										{
											_id: '5c45c0177bccff62b4c83e5f',
											uid: 'Lx1006',
											type: 'composedOf'
										},
										{
											_id: '5c45c0657bccff62b4c83e62',
											uid: 'Lx1007',
											type: 'composedOf'
										},
										{
											_id: '5c45c0a07bccff62b4c83e65',
											uid: 'Lx1008',
											type: 'composedOf'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: [
										{
											_id: '5c45c0177bccff62b4c83e5d',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1006',
											product: {
												id: '1006',
												name: 'Fan Blade',
												description: 'Fan Blade'
											},
											links: [
												{
													_id: '5c45c0177bccff62b4c83e5e',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										},
										{
											_id: '5c45c0647bccff62b4c83e60',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1007',
											product: {
												id: '1007',
												name: 'Brushless DC Motor',
												description: 'DC Motor'
											},
											links: [
												{
													_id: '5c45c0647bccff62b4c83e61',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										},
										{
											_id: '5c45c0a07bccff62b4c83e63',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1008',
											product: {
												id: '1008',
												name: 'Fan Speed Controller Board',
												description: 'Motor Board'
											},
											links: [
												{
													_id: '5c45c0a07bccff62b4c83e64',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										}
									]
								}
							]
						}
					]
				},
				{
					_id: '5c45c1ba7bccff62b4c83e66',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx2001', 'Lx2002'],
					uid: 'Lx2000',
					product: {
						id: '2000',
						name: 'WD HDD 1B',
						description: 'Western Digital Darddisk'
					},
					links: [
						{
							_id: '5c45c1ba7bccff62b4c83e67',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45c3777bccff62b4c83e6b',
							uid: 'Lx2001',
							type: 'composedOf'
						},
						{
							_id: '5c45c3a87bccff62b4c83e6e',
							uid: 'Lx2002',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45c3777bccff62b4c83e69',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2001',
							product: {
								id: '2001',
								name: 'Platter',
								description: 'platter Disk'
							},
							links: [
								{
									_id: '5c45c3777bccff62b4c83e6a',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45c3a87bccff62b4c83e6c',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2002',
							product: {
								id: '2002',
								name: 'RW Arm assembly',
								description: 'RW Arm assembly'
							},
							links: [
								{
									_id: '5c45c3a87bccff62b4c83e6d',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						}
					]
				},
				{
					_id: '5c45c3a87bccff62b4c83e6c',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx2002',
					product: {
						id: '2002',
						name: 'RW Arm assembly',
						description: 'RW Arm assembly'
					},
					links: [
						{
							_id: '5c45c3a87bccff62b4c83e6d',
							uid: 'Lx2000',
							type: 'usedIn'
						}
					],
					parent: 'Lx2000',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45c3777bccff62b4c83e69',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx2001',
					product: {
						id: '2001',
						name: 'Platter',
						description: 'platter Disk'
					},
					links: [
						{
							_id: '5c45c3777bccff62b4c83e6a',
							uid: 'Lx2000',
							type: 'usedIn'
						}
					],
					parent: 'Lx2000',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45bfc47bccff62b4c83e57',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1004',
					product: {
						id: '1004',
						name: 'CPU HeatSink',
						description: 'HeatSink'
					},
					links: [
						{
							_id: '5c45bfc47bccff62b4c83e58',
							uid: 'Lx1003',
							type: 'usedIn'
						}
					],
					parent: 'Lx1003',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c45c0647bccff62b4c83e60',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1007',
					product: {
						id: '1007',
						name: 'Brushless DC Motor',
						description: 'DC Motor'
					},
					links: [
						{
							_id: '5c45c0647bccff62b4c83e61',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				},
				{
					_id: '5c45bfe67bccff62b4c83e5a',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx1006', 'Lx1007', 'Lx1008'],
					uid: 'Lx1005',
					product: {
						id: '1005',
						name: 'CPU Fan',
						description: 'Fan'
					},
					links: [
						{
							_id: '5c45bfe67bccff62b4c83e5b',
							uid: 'Lx1003',
							type: 'usedIn'
						},
						{
							_id: '5c45c0177bccff62b4c83e5f',
							uid: 'Lx1006',
							type: 'composedOf'
						},
						{
							_id: '5c45c0657bccff62b4c83e62',
							uid: 'Lx1007',
							type: 'composedOf'
						},
						{
							_id: '5c45c0a07bccff62b4c83e65',
							uid: 'Lx1008',
							type: 'composedOf'
						}
					],
					parent: 'Lx1003',
					__v: 0,
					depth: 2,
					relations: [
						{
							_id: '5c45c0177bccff62b4c83e5d',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1006',
							product: {
								id: '1006',
								name: 'Fan Blade',
								description: 'Fan Blade'
							},
							links: [
								{
									_id: '5c45c0177bccff62b4c83e5e',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						},
						{
							_id: '5c45c0647bccff62b4c83e60',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1007',
							product: {
								id: '1007',
								name: 'Brushless DC Motor',
								description: 'DC Motor'
							},
							links: [
								{
									_id: '5c45c0647bccff62b4c83e61',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						},
						{
							_id: '5c45c0a07bccff62b4c83e63',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1008',
							product: {
								id: '1008',
								name: 'Fan Speed Controller Board',
								description: 'Motor Board'
							},
							links: [
								{
									_id: '5c45c0a07bccff62b4c83e64',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						}
					]
				},
				{
					_id: '5c45c0177bccff62b4c83e5d',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1006',
					product: {
						id: '1006',
						name: 'Fan Blade',
						description: 'Fan Blade'
					},
					links: [
						{
							_id: '5c45c0177bccff62b4c83e5e',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				}
			],
			links: [
				{
					_id: '5c45b8d37bccff62b4c83e50',
					uid: 'Lx1001',
					type: 'composedOf'
				},
				{
					_id: '5c45c1ba7bccff62b4c83e68',
					uid: 'Lx2000',
					type: 'composedOf'
				}
			],
			relations: [
				{
					_id: '5c45b8d37bccff62b4c83e4e',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx1002', 'Lx1003'],
					uid: 'Lx1001',
					product: {
						id: '1001',
						name: 'Intel I5 CPU QuadCore',
						description: 'HP Laptop'
					},
					links: [
						{
							_id: '5c45b8d37bccff62b4c83e4f',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45bf6b7bccff62b4c83e53',
							uid: 'Lx1002',
							type: 'composedOf'
						},
						{
							_id: '5c45bf8a7bccff62b4c83e56',
							uid: 'Lx1003',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45bf6a7bccff62b4c83e51',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1002',
							product: {
								id: '1002',
								name: 'Intel I5 CPU Chip',
								description: 'CPU Chip'
							},
							links: [
								{
									_id: '5c45bf6a7bccff62b4c83e52',
									uid: 'Lx1001',
									type: 'usedIn'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45bf897bccff62b4c83e54',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: ['Lx1004', 'Lx1005'],
							uid: 'Lx1003',
							product: {
								id: '1003',
								name: 'Intel CPU Cooler',
								description: 'CPU Cooler'
							},
							links: [
								{
									_id: '5c45bf897bccff62b4c83e55',
									uid: 'Lx1001',
									type: 'usedIn'
								},
								{
									_id: '5c45bfc47bccff62b4c83e59',
									uid: 'Lx1004',
									type: 'composedOf'
								},
								{
									_id: '5c45bfe67bccff62b4c83e5c',
									uid: 'Lx1005',
									type: 'composedOf'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: [
								{
									_id: '5c45bfc47bccff62b4c83e57',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [],
									uid: 'Lx1004',
									product: {
										id: '1004',
										name: 'CPU HeatSink',
										description: 'HeatSink'
									},
									links: [
										{
											_id: '5c45bfc47bccff62b4c83e58',
											uid: 'Lx1003',
											type: 'usedIn'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c45bfe67bccff62b4c83e5a',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: ['Lx1006', 'Lx1007', 'Lx1008'],
									uid: 'Lx1005',
									product: {
										id: '1005',
										name: 'CPU Fan',
										description: 'Fan'
									},
									links: [
										{
											_id: '5c45bfe67bccff62b4c83e5b',
											uid: 'Lx1003',
											type: 'usedIn'
										},
										{
											_id: '5c45c0177bccff62b4c83e5f',
											uid: 'Lx1006',
											type: 'composedOf'
										},
										{
											_id: '5c45c0657bccff62b4c83e62',
											uid: 'Lx1007',
											type: 'composedOf'
										},
										{
											_id: '5c45c0a07bccff62b4c83e65',
											uid: 'Lx1008',
											type: 'composedOf'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c45c1ba7bccff62b4c83e66',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: ['Lx2001', 'Lx2002'],
					uid: 'Lx2000',
					product: {
						id: '2000',
						name: 'WD HDD 1B',
						description: 'Western Digital Darddisk'
					},
					links: [
						{
							_id: '5c45c1ba7bccff62b4c83e67',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45c3777bccff62b4c83e6b',
							uid: 'Lx2001',
							type: 'composedOf'
						},
						{
							_id: '5c45c3a87bccff62b4c83e6e',
							uid: 'Lx2002',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45c3777bccff62b4c83e69',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2001',
							product: {
								id: '2001',
								name: 'Platter',
								description: 'platter Disk'
							},
							links: [
								{
									_id: '5c45c3777bccff62b4c83e6a',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45c3a87bccff62b4c83e6c',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2002',
							product: {
								id: '2002',
								name: 'RW Arm assembly',
								description: 'RW Arm assembly'
							},
							links: [
								{
									_id: '5c45c3a87bccff62b4c83e6d',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						}
					]
				}
			],
			depth: -1
		}
	];

	treeData = [
		{
			uid: '1000',
			product: {
				id: '1000',
				name: 'item Ax1000',
				description: 'item A'
			},
			links: [
				{
					_id: '5c388e4f3bd185b35410bcd4',
					uid: '1002',
					type: 'composedOf'
				},
				{
					_id: '5c388e4f3bd185b35410bcd3',
					uid: '1003',
					type: 'composedOf'
				}
			],
			timestamp: '2019-01-11T12:38:15.895Z',
			childrens: [
				{
					uid: '1002',
					product: {
						id: '1002',
						name: 'item Bx1002',
						description: 'item B'
					},
					links: [
						{
							_id: '5c388e833bd185b35410bcd6',
							uid: '1001',
							type: 'usedIn'
						}
					],
					timestamp: '2019-01-11T12:38:15.895Z',
					childrens: []
				},
				{
					uid: '1003',
					product: {
						id: '1003',
						name: 'item Cx1003',
						description: 'item C'
					},
					links: [
						{
							_id: '5c388ee13bd185b35410bcda',
							uid: '1001',
							type: 'usedIn'
						},
						{
							_id: '5c388ee13bd185b35410bcd9',
							uid: '1004',
							type: 'composedOf'
						},
						{
							_id: '5c388ee13bd185b35410bcd8',
							uid: '1005',
							type: 'composedOf'
						}
					],
					timestamp: '2019-01-11T12:38:15.895Z',
					childrens: [
						{
							uid: '1004',
							product: {
								id: '1004',
								name: 'item Dx1004',
								description: 'item D'
							},
							links: [
								{
									_id: '5c388f8c3bd185b35410bce0',
									uid: '1003',
									type: 'usedIn'
								},
								{
									_id: '5c388f8c3bd185b35410bcdf',
									uid: '1006',
									type: 'composedOf'
								},
								{
									_id: '5c388f8c3bd185b35410bcde',
									uid: '1007',
									type: 'composedOf'
								}
							],
							timestamp: '2019-01-11T12:38:15.895Z',
							childrens: []
						},
						{
							uid: '1005',
							product: {
								id: '1005',
								name: 'item Ex1005',
								description: 'item E'
							},
							links: [
								{
									_id: '5c388f333bd185b35410bcdc',
									uid: '1003',
									type: 'usedIn'
								}
							],
							timestamp: '2019-01-11T12:38:15.895Z',
							childrens: [
								{
									uid: '1005',
									product: {
										id: '1005',
										name: 'item Ex1006',
										description: 'item E'
									},
									links: [
										{
											_id: '5c388f333bd185b35410bcdc',
											uid: '1003',
											type: 'usedIn'
										}
									],
									timestamp: '2019-01-11T12:38:15.895Z',
									childrens: []
								}
							]
						}
					]
				}
			]
		}
	];

	ngOnInit() {
		if (this.treeData) {
			this.constructTree();
		}
	}

	constructTree() {
		const treeData = this.treeDataApi;
		this.i = 0;
		this.testd = 0;
		if (treeData) {
			this.tree = d3.layout
				.tree()
				.separation((a, b) => (a.parent === b.parent ? 5 : 5.25))
				.children((d) => {
					return d.relations;
				})
				.size([this.height, this.width]);

			this.svg = d3
				.select('.tree')
				.append('svg')
				.attr('width', this.width + this.margin.right + this.margin.left)
				.attr('height', this.height + this.margin.top + this.margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

			this.root = treeData[0];
			this.drawTree();
		}
	}

	drawTree() {
		const nodes = this.tree.nodes(this.root).reverse();
		const links = this.tree.links(nodes);

		nodes.forEach((d) => {
			d.y = this.width - 109 - d.depth * 270; // reverse tree
		});

		const node = this.svg.selectAll('g.node').data(nodes, (d) => {
			return d.id || (d.id = ++this.i); // assign id to nodes
		});

		const nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', (d) => {
			return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
		});

		// append line into svg
		node
			.append('line')
			.style('stroke', (d) => {
				if (d.level === 1) {
					return '#6f3bda';
				}
				if (d.level === 2) {
					return '#3fdbef';
				}
				if (d.level === 3) {
					return '#b8ce2b';
				} else {
					return '#3fdbef';
				}
			})
			.attr('x1', -(this.boxWidth / 2))
			.attr('y1', -(this.boxHeight / 2))
			.attr('x2', -(this.boxWidth / 2))
			.attr('y2', this.boxHeight / 2)
			.attr('stroke-width', '10');

		// append rect into svg
		node
			.append('rect')
			.attr({
				x: -(this.boxWidth / 2),
				y: -(this.boxHeight / 2),
				width: this.boxWidth,
				height: this.boxHeight
			})
			.attr('fill', 'white')
			.attr('stroke-width', '.07')
			.attr('stroke', 'black');

		node
			.append('text')
			.attr('x', (d) => {
				return -(this.boxWidth / 20);
			})
			.attr('y', (d) => {
				return this.boxWidth / 60;
			})
			.style('text-anchor', 'middle')
			.text((d) => {
				return d.product.name;
			});

		const link = this.svg.selectAll('path.link').data(links, (d) => {
			this.data = d;
			return d.target.id;
		});

		// append link into svg
		link
			.enter()
			.insert('path', 'g')
			.attr('class', 'link')
			.attr('stroke', '#000')
			.attr('shape-rendering', 'crispEdges')
			.attr('d', (d) => {
				const sourceX = d.source.x,
					sourceY = d.source.y + this.boxWidth / 2,
					targetX = d.target.x,
					targetY = d.target.y - this.boxWidth / 2;
				return (
					'M' +
					sourceY +
					',' +
					sourceX +
					'H' +
					(sourceY + (targetY - sourceY) / 2) +
					'V' +
					targetX +
					'H' +
					targetY
				);
			});
	}
}

@Component({
	selector: 'suku-product-trace-widget',
	template: `
	<span [formGroup]="form">
	<div class=" product-boxContent">
			<div class="col-sm-12 prizeHead pl-0">
					{{headName}}
			</div>
			<div class="col-sm-12 prizesubHead pl-0">
					{{subHeadName}}
			</div>
	</div>
	<div class="col-sm-12 mt-2 pt-4 pb-4 RectangleBorder">
			<div class="col-sm-12 productName pb-3">
					{{name}}
			</div>
			<div class="col-sm-12 pb-2 pl-3 p-0 searchBorderBox">
					<input type="text" #search class="searchBorderStyles" formControlName="{{control}}" name="{{control}}"
					 placeholder="search"	(keyup)="searchFun.emit(isSearch)">
					<span class="m-1"><i class="fa fa-search" style="font-size:22px;color:#b6b6b6;"></i></span>
			</div>
			<p class="resultCount" *ngIf="_result == 'true'">
			{{productdetails?.length}} products found with the above number. </p>
			<div *ngIf="_visible == 'false'">
			<p class="responseInfo" *ngIf="productdetails?.length > 0 ? true : false ">please select one</p>
				 <div class="heightTab" id="scrollDiv">
				  <div class="col" *ngFor="let products of productdetails">
						<mat-radio-button color="primary" class="searchData f13" value="2"
						 (click)="selectproducts.emit(products)" (click)="showSelectedPro(products)">
						 {{products.product.description}}<br>
						 {{products.product.name}}<br></mat-radio-button>
						<hr>
				 </div>
				</div>
		</div>
		<div class="col-sm-12 mb-2 text-center pt-3 mt-3 pb-1">
		<span class="pt-2">
    <a *ngIf="_visible == 'true'" id="searchForProduct" class="trackBtn c-pointer btn-info f14"
        (click)="searchByProduct.emit()"> Search for product </a>
		<a *ngIf="_visible == 'false'" [ngClass]="{'disabled': _disableBtn =='false' }"
		    id="tracetheProduct"
        class="trackBtn  c-pointer btn-info f14" (click)="traceproduct.emit(1)"> trace the
				product </a>
			</span>
	</div>
	</div>
	</span>
	`,
	styleUrls: ['./webcomponents.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SukuTrackTraceProductSearchComponent {
	@Input() form: FormGroup;
	val = true;
	val2 = false;
	_visible;
	_data;
	_disableBtn;
	selectedItem;
	isSearch = false;
	_result;
	@Input('head-name') headName;
	@Input('sub-Head-Name') subHeadName;
	@Input() name;
	@Input() control;
	@Output() searchFun = new EventEmitter();
	@Output() selectproducts = new EventEmitter();
	@Output() searchByProduct = new EventEmitter();
	@Output() traceproduct = new EventEmitter();
	@Input()
	get disableBtn() {
		return this._disableBtn;
	}
	set disableBtn(val) {
		this._disableBtn = val;
		console.log("disableBtn", this._disableBtn);
	}

	@Input()
	get productdetails() {
		return this._data;
	}
	set productdetails(val) {
		if (val) {
			this._data = JSON.parse(val);
		}
	}

	@Input()
	get result() {
		return this._result;
	}
	set result(res) {
		this._result = res;
	}

	searchEnabled() {
		this.isSearch = !this.isSearch;
	}

	@Input('visible')
	get visible() {
		console.log('data', this._visible);
		return this._visible;
	}

	set visible(val) {
		this._visible = val;
		console.log('Setting date: ' + val);
	}

	showSelectedPro(newValue) {
		this.selectedItem = newValue;
	}

}
