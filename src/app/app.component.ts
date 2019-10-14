import { Component, OnInit, Injector } from '@angular/core';
import {
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
	SukuTrackProgressBarComponent
} from './webcomponents/webcomponent';
import { createCustomElement } from '@angular/elements';
import { SukuTransactionHistoryComponent } from './webcomponents/suku-transaction-history/suku-transaction-history.component';
import { SukuDwollaFundingAgreementComponent } from './webcomponents/suku-dwolla-funding-agreement/suku-dwolla-funding-agreement.component';
import { SukuDwollaFundingSourceComponent } from './webcomponents/suku-dwolla-funding-source/suku-dwolla-funding-source.component';
import { SukuTextEditorComponent } from './webcomponents/suku-text-editor/suku-text-editor.component';
import { SukuProposalHeaderComponent } from './webcomponents/suku-proposal-header/suku-proposal-header.component';
import { SukuDoughnutChartWidgetComponent } from './webcomponents/suku-doughnut-chart-widget/suku-doughnut-chart-widget.component';
import { SukuListProposalChoiceWidgetComponent } from './webcomponents/suku-list-proposal-choice-widget/suku-list-proposal-choice-widget.component';
import {SukuBidWidgetTagComponent} from './webcomponents/suku-bid-widget/suku-bid-widget.component';
import { SukuDateComponent } from './webcomponents/suku-date/suku-date.component';
import { SukuShippingInfoWidgetComponent } from './webcomponents/suku-shipping-info-widget/suku-shipping-info-widget.component'
import { SukuSocialIconsComponent } from './webcomponents/suku-social-icons/suku-social-icons.component';
import { SukuTermsAndConditionsComponent } from './webcomponents/suku-terms-and-conditions/suku-terms-and-conditions.component'
import { SukuHeaderComponent } from './webcomponents/suku-header/suku-header.component';
import { SukuCardLineTypeTwoComponent } from './webcomponents/suku-card-line-type-two/suku-card-line.component';
import { SukuRatingCardLineComponent } from './webcomponents/suku-rating-card-line/suku-rating-card-line.component';
import { SukuProgressBarTypeTwoComponent } from './webcomponents/suku-progress-bar-type-two/suku-progress-bar-type-two.component'
import { SukuProgressBarTypeOneComponent } from './webcomponents/suku-progress-bar-type-one/suku-progress-bar-type-one.component'
import { SukuPaymentPortalHelpComponent } from './webcomponents/suku-payment-portal-help/suku-payment-portal-help.component'
import { SukuProfileHeaderComponent } from './webcomponents/suku-profile-header/suku-profile-header.component';
import { SukuFundingSourceComponent } from './webcomponents/suku-funding-source/suku-funding-source.component'
import { SukuCreateCustomerComponent } from './webcomponents/suku-create-customer/suku-create-customer.component';
import { SukuLoaderComponent } from './webcomponents/suku-loader/suku-loader.component';
import { SukuChatWidgetComponent } from './webcomponents/suku-chat-widget/suku-chat-widget.component';
// import { SukuResponseComponent } from './webcomponents/suku-response/suku-response.component';
import { SukuImageWidgetComponent } from './webcomponents/suku-image-widget/suku-image-widget.component';
import { SukuACHSettingsComponent } from './webcomponents/suku-achsettings/suku-achsettings.component';
import { SukuCreationCustomerFileuploadComponent } from './webcomponents/suku-creation-customer-fileupload/suku-creation-customer-fileupload.component';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'suku-doc';

	constructor(private injector: Injector) { }
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
		// const SukuResponse = createCustomElement(SukuResponseComponent, {
		// 	injector: this.injector
		// });
		// customElements.define('suku-response', SukuResponse);
		const SukuTrackTrace = createCustomElement(SukuTrackProgressBarComponent, {
			injector: this.injector
		});
		customElements.define('suku-track-progress-bar', SukuTrackTrace);
		const SukuTree = createCustomElement(SukuTreeComponent, {
			injector: this.injector
		});
		customElements.define('suku-tree', SukuTree);
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
		const SukuProposal = createCustomElement(SukuProposalHeaderComponent, {
			injector: this.injector
		});
		customElements.define('suku-proposal-header', SukuProposal);
		const SukuListProposalChoice = createCustomElement(SukuListProposalChoiceWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-list-proposal-choice-widget', SukuListProposalChoice);
		const SukuDoughnutChart = createCustomElement(SukuDoughnutChartWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-doughnut-chart-widget', SukuDoughnutChart);
		const SukuBidWidgetTag = createCustomElement(SukuBidWidgetTagComponent, {
			injector: this.injector
		});
		customElements.define('suku-bid-widget', SukuBidWidgetTag);
		const SukuDate = createCustomElement(SukuDateComponent, {
			injector: this.injector
		});
		customElements.define('suku-date', SukuDate);
		const SukuShippingInfo = createCustomElement(SukuShippingInfoWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-shipping-info-widget', SukuShippingInfo);
		const SocialIcons = createCustomElement(SukuSocialIconsComponent, {
			injector: this.injector
		});
		customElements.define('suku-social-icons', SocialIcons);
		const SukuTermsAndConditions = createCustomElement(SukuTermsAndConditionsComponent, {
			injector: this.injector
		});
		customElements.define('suku-terms-and-conditions', SukuTermsAndConditions);
		const SukuHeader = createCustomElement(SukuHeaderComponent, {
			injector: this.injector
		});
		customElements.define('suku-header', SukuHeader);
		const SukuCardLineTypeTwo = createCustomElement(SukuCardLineTypeTwoComponent, {
			injector: this.injector
		});
		customElements.define('suku-card-line-type-two', SukuCardLineTypeTwo);
		const SukuRatingCardLine = createCustomElement(SukuRatingCardLineComponent, {
			injector: this.injector
		});
		customElements.define('suku-rating-card-line', SukuRatingCardLine);
		const SukuProgressBarTypeTwo = createCustomElement(SukuProgressBarTypeTwoComponent, {
			injector: this.injector
		});
		customElements.define('suku-progress-bar-type-two', SukuProgressBarTypeTwo);
		const SukuProgressBarTypeOne = createCustomElement(SukuProgressBarTypeOneComponent, {
			injector: this.injector
		});
		customElements.define('suku-progress-bar-type-one', SukuProgressBarTypeOne);
		const SukuPaymentPortalHelp = createCustomElement(SukuPaymentPortalHelpComponent, {
			injector: this.injector
		});
		customElements.define('suku-payment-portal-help', SukuPaymentPortalHelp);
		const SukuProfileHeader = createCustomElement(SukuProfileHeaderComponent, {
			injector: this.injector
		});
		customElements.define('suku-profile-header', SukuProfileHeader);
		const SukuFundingSource = createCustomElement(SukuFundingSourceComponent, {
			injector: this.injector
		});
		customElements.define('suku-funding-source', SukuFundingSource);
		const SukuCreateCustomer = createCustomElement(SukuCreateCustomerComponent, {
			injector: this.injector
		});
		customElements.define('suku-create-customer', SukuCreateCustomer);
		const SukuLoader = createCustomElement(SukuLoaderComponent, {
			injector: this.injector
		});
		customElements.define('suku-loader', SukuLoader);
		const SukuChatWidget = createCustomElement(SukuChatWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-chat-widget', SukuChatWidget);
		const SukuResponse = createCustomElement(SukuResponseComponent, {
			injector: this.injector
		});
		customElements.define('suku-response', SukuResponse);
		const SukuImageWidget = createCustomElement(SukuImageWidgetComponent, {
			injector: this.injector
		});
		customElements.define('suku-image-widget', SukuImageWidget);
		// const SukuACHSettings = createCustomElement(SukuACHSettingsComponent, {
		// 	injector: this.injector
		// });
		// customElements.define('suku-ach-setting', SukuACHSettings);
		const SukuCreationCustomerFileupload = createCustomElement(SukuCreationCustomerFileuploadComponent, {
			injector: this.injector
		});
		customElements.define('suku-creation-customer-fileupload', SukuCreationCustomerFileupload);
		
	}
}
