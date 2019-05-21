import { Component, OnInit, Injector } from '@angular/core';
import {
	SukuBidTagComponent,
	SukuCardLineComponent,
	SukuCheckboxComponent,
	SukuDashboardProfileComponent,
	SukuHeadingComponent,
	SukuHomeHeadingComponent,
	SukuHomeItalicHeadingComponent,
	SukuHomeWidgetComponent,
	SukuInfoButtonComponent,
	SukuInlineDropDownComponent,
	SukuMatchChipComponent,
	SukuNotificationBoxComponent,
	SukuPrimaryButtonComponent,
	SukuProgressBarComponent,
	SukuRadioButtonComponent,
	SukuSecondaryButtonComponent,
	SukuSubHeadingComponent,
	SukuRatingComponent,
	SukuRatingLineItemComponent,
	SukuLinkComponent,
	SukuAddWidgetComponent,
	SukuSelectInputComponent,
	SukuNavSubmenuComponent,
	SukuBidInfoComponent,
	SukuMailWidgetComponent,
	SukuPhoneWidgetComponent,
	SukuAddressWidgetComponent,
	SukuSearchInputComponent,
	SukuProfileWidgetComponent,
	SukuStarBadgeComponent,
	SukuCardTitleComponent,
	SukuInputComponent,
	SukuResponseComponent,
	SukuDefaultButtonComponent,
	SukuTreeComponent,
	SukuTrackProgressBarComponent,
	SukuTrackTraceProductSearchComponent
} from './webcomponents/webcomponent';
import { createCustomElement } from '@angular/elements';
import { SukuACHSettingsComponent } from './webcomponents/suku-achsettings/suku-achsettings.component';
import { SukuTransactionHistoryComponent } from './webcomponents/suku-transaction-history/suku-transaction-history.component';
import { SukuDwollaFundingAgreementComponent } from './webcomponents/suku-dwolla-funding-agreement/suku-dwolla-funding-agreement.component';
import { SukuDwollaFundingSourceComponent } from './webcomponents/suku-dwolla-funding-source/suku-dwolla-funding-source.component';
import { SukuTextEditorComponent } from './webcomponents/suku-text-editor/suku-text-editor.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	title = 'suku-doc';
	constructor(private injector: Injector) {}
	ngOnInit() {
		const sukuHeading = createCustomElement(SukuHeadingComponent, { injector: this.injector });
		customElements.define('suku-heading', sukuHeading);
		const sukuSubHeading = createCustomElement(SukuSubHeadingComponent, {
			injector: this.injector
		});
		customElements.define('suku-sub-heading', sukuSubHeading);
		const sukuUserProfile = createCustomElement(SukuDashboardProfileComponent, {
			injector: this.injector
		});
		customElements.define('suku-dashboard-profile', sukuUserProfile);
		const sukuNotificationBox = createCustomElement(SukuNotificationBoxComponent, { injector: this.injector });
		customElements.define('suku-notification-widget', sukuNotificationBox);
		const sukuHomeHeading = createCustomElement(SukuHomeHeadingComponent, {
			injector: this.injector
		});
		customElements.define('suku-home-heading', sukuHomeHeading);
		const sukuHomeWidget = createCustomElement(SukuHomeWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-home-widget', sukuHomeWidget);
		const sukuItalicHeading = createCustomElement(SukuHomeItalicHeadingComponent, { injector: this.injector });
		customElements.define('suku-home-italic-heading', sukuItalicHeading);
		const SukuInfoButton = createCustomElement(SukuInfoButtonComponent, {
			injector: this.injector
		});
		customElements.define('suku-info-button', SukuInfoButton);
		const SukuPrimaryButton = createCustomElement(SukuPrimaryButtonComponent, {
			injector: this.injector
		});
		customElements.define('suku-primary-button', SukuPrimaryButton);
		const SukuDefaultButton = createCustomElement(SukuDefaultButtonComponent, {
			injector: this.injector
		});
		customElements.define('suku-default-button', SukuDefaultButton);
		const SukuLink = createCustomElement(SukuLinkComponent, { injector: this.injector });
		customElements.define('suku-link', SukuLink);
		const SukuAddwidget = createCustomElement(SukuAddWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-add-widget', SukuAddwidget);
		const SukuSelectInput = createCustomElement(SukuSelectInputComponent, {
			injector: this.injector
		});
		customElements.define('suku-select-input', SukuSelectInput);
		const SukuProgressBar = createCustomElement(SukuProgressBarComponent, {
			injector: this.injector
		});
		customElements.define('suku-progress-bar', SukuProgressBar);
		const SukuEmailWidget = createCustomElement(SukuMailWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-mail-widget', SukuEmailWidget);
		const SukuPhoneWidget = createCustomElement(SukuPhoneWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-phone-widget', SukuPhoneWidget);
		const SukuAddWidget = createCustomElement(SukuAddressWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-address-widget', SukuAddWidget);
		const SukuInlineDropDown = createCustomElement(SukuInlineDropDownComponent, { injector: this.injector });
		customElements.define('suku-inline-dropdown', SukuInlineDropDown);
		const SukuCheckbox = createCustomElement(SukuCheckboxComponent, {
			injector: this.injector
		});
		customElements.define('suku-checkbox', SukuCheckbox);
		const SukuRadio = createCustomElement(SukuRadioButtonComponent, {
			injector: this.injector
		});
		customElements.define('suku-radio-button', SukuRadio);
		const SukuCardLine = createCustomElement(SukuCardLineComponent, {
			injector: this.injector
		});
		customElements.define('suku-card-line', SukuCardLine);
		const SukuSecondaryBtn = createCustomElement(SukuSecondaryButtonComponent, {
			injector: this.injector
		});
		customElements.define('suku-secondary-button', SukuSecondaryBtn);
		const SukuBidTag = createCustomElement(SukuBidTagComponent, { injector: this.injector });
		customElements.define('suku-bid-tag', SukuBidTag);
		const SukuMatchChip = createCustomElement(SukuMatchChipComponent, {
			injector: this.injector
		});
		customElements.define('suku-match-chip', SukuMatchChip);
		const SukuRatingStar = createCustomElement(SukuRatingComponent, {
			injector: this.injector
		});
		customElements.define('suku-rating-star', SukuRatingStar);
		const SukuRatingItem = createCustomElement(SukuRatingLineItemComponent, {
			injector: this.injector
		});
		customElements.define('suku-rating-widget', SukuRatingItem);
		const SukuNavSubmenu = createCustomElement(SukuNavSubmenuComponent, {
			injector: this.injector
		});
		customElements.define('suku-nav-submenu', SukuNavSubmenu);
		const SukuBidInfo = createCustomElement(SukuBidInfoComponent, { injector: this.injector });
		customElements.define('suku-bid-info', SukuBidInfo);
		const SukuSearch = createCustomElement(SukuSearchInputComponent, {
			injector: this.injector
		});
		customElements.define('suku-search-input', SukuSearch);
		const SukuProfileWidget = createCustomElement(SukuProfileWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-profile-widget', SukuProfileWidget);
		const SukuStarBadge = createCustomElement(SukuStarBadgeComponent, {
			injector: this.injector
		});
		customElements.define('suku-star-badge', SukuStarBadge);
		const SukuCardTitle = createCustomElement(SukuCardTitleComponent, {
			injector: this.injector
		});
		customElements.define('suku-card-title', SukuCardTitle);
		const SukuInput = createCustomElement(SukuInputComponent, {
			injector: this.injector
		});
		customElements.define('suku-input-control', SukuInput);
		const SukuResponse = createCustomElement(SukuResponseComponent, {
			injector: this.injector
		});
		customElements.define('suku-response', SukuResponse);
		const SukuTrackTrace = createCustomElement(SukuTrackProgressBarComponent, {
			injector: this.injector
		});
		customElements.define('suku-track-progress-bar', SukuTrackTrace);
		const SukuTree = createCustomElement(SukuTreeComponent, {
			injector: this.injector
		});
		customElements.define('suku-tree', SukuTree);
		const SukuACh = createCustomElement(SukuACHSettingsComponent, {
			injector: this.injector
		});
		customElements.define('suku-ach-setting', SukuACh);
		const SukuTransactionHistory = createCustomElement(SukuTransactionHistoryComponent, {
			injector: this.injector
		});
		customElements.define('suku-transaction-history', SukuTransactionHistory);
		const SukuFundAgreement = createCustomElement(SukuDwollaFundingAgreementComponent, {
			injector: this.injector
		});
		customElements.define('suku-dwolla-funding-agreement', SukuFundAgreement);
		const SukuFundSource = createCustomElement(SukuDwollaFundingSourceComponent, {
			injector: this.injector
		});
		customElements.define('suku-dwolla-funding-source', SukuFundSource);
		const SukuTextEditor = createCustomElement(SukuTextEditorComponent, {
			injector: this.injector
		});
		customElements.define('suku-text-editor', SukuTextEditor);
	}
}
