import {
	SukuCardLineComponent,
	SukuCheckboxComponent,
	SukuDashboardProfileComponent,
	SukuDefaultButtonComponent,
	SukuFiltersComponent,
	SukuHeadingComponent,
	SukuHomeHeadingComponent,
	SukuHomeItalicHeadingComponent,
	SukuHomeWidgetComponent,
	SukuInfoButtonComponent,
	SukuInlineDropDownComponent,
	SukuMailWidgetComponent,
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
	SukuPhoneWidgetComponent,
	SukuAddressWidgetComponent,
	SukuSearchInputComponent,
	SukuProfileWidgetComponent,
	SukuStarBadgeComponent,
	SukuCardTitleComponent,
	SukuCardListComponent,
	SukuHeadingNestComponent,
	SukuSubNestHeadingComponent,
	SukuInputComponent,
	// SukuResponseComponent,
	SukuTreeComponent,
	DynamicFormComponent,
	SukuTrackProgressBarComponent,
	SukuTrackTraceProductSearchComponent
} from './webcomponent';
import { SukuTransactionHistoryComponent } from './suku-transaction-history/suku-transaction-history.component';
import { SukuBeneficialOwnerComponent } from './suku-beneficial-owner/suku-beneficial-owner.component';
import { SukuDwollaFundingAgreementComponent } from './suku-dwolla-funding-agreement/suku-dwolla-funding-agreement.component';
import { SukuDwollaFundingSourceComponent } from './suku-dwolla-funding-source/suku-dwolla-funding-source.component';
import { SukuTextEditorComponent } from './suku-text-editor/suku-text-editor.component';
import { SukuProposalHeaderComponent } from './suku-proposal-header/suku-proposal-header.component';
import { SukuOptionModalComponent } from './suku-proposal-option-modal/suku-option-modal.component';
import { suku } from './suku-governance-webcomponents.service';
import { SukuDoughnutChartWidgetComponent } from './suku-doughnut-chart-widget/suku-doughnut-chart-widget.component';
import { SukuGovernanceFilterComponent } from './suku-governance-filter/suku-governance-filter.component';
import { SukuProposalOptionModalComponent } from './suku-proposal-option-modal/suku-proposal-option-modal.component';
import { SukuListProposalChoiceWidgetComponent } from './suku-list-proposal-choice-widget/suku-list-proposal-choice-widget.component';
import { SukuBidWidgetTagComponent } from './suku-bid-widget/suku-bid-widget.component';
import { SukuDateComponent } from './suku-date/suku-date.component';
import { SukuShippingInfoWidgetComponent } from './suku-shipping-info-widget/suku-shipping-info-widget.component';
import { SukuSocialIconsComponent } from './suku-social-icons/suku-social-icons.component';
import { SukuTermsAndConditionsComponent } from './suku-terms-and-conditions/suku-terms-and-conditions.component';
import { SukuHeaderComponent } from './suku-header/suku-header.component';
import { SukuCardLineTypeTwoComponent } from './suku-card-line-type-two/suku-card-line.component';
import { SukuRatingCardLineComponent } from './suku-rating-card-line/suku-rating-card-line.component';
import { SukuProgressBarTypeTwoComponent } from './suku-progress-bar-type-two/suku-progress-bar-type-two.component';
import { SukuProgressBarTypeOneComponent } from './suku-progress-bar-type-one/suku-progress-bar-type-one.component';
import { SukuPaymentPortalHelpComponent } from './suku-payment-portal-help/suku-payment-portal-help.component';
import { SukuProfileHeaderComponent } from './suku-profile-header/suku-profile-header.component';
import { SukuFundingSourceComponent } from './suku-funding-source/suku-funding-source.component';
import { SukuCreateCustomerComponent } from './suku-create-customer/suku-create-customer.component';
import { SukuLoaderComponent } from './suku-loader/suku-loader.component';
import { SukuChatWidgetComponent } from './suku-chat-widget/suku-chat-widget.component';
import { SukuResponseComponent } from './suku-response/suku-response.component';

export const WebComponents = [
	SukuHeadingComponent,
	SukuSubHeadingComponent,
	SukuDashboardProfileComponent,
	SukuNotificationBoxComponent,
	SukuHomeHeadingComponent,
	SukuHomeWidgetComponent,
	SukuFiltersComponent,
	SukuHomeItalicHeadingComponent,
	SukuInfoButtonComponent,
	SukuPrimaryButtonComponent,
	SukuDefaultButtonComponent,
	SukuProgressBarComponent,
	SukuMailWidgetComponent,
	SukuPhoneWidgetComponent,
	SukuAddressWidgetComponent,
	SukuInlineDropDownComponent,
	SukuCheckboxComponent,
	SukuRadioButtonComponent,
	SukuCardLineComponent,
	SukuSecondaryButtonComponent,
	SukuMatchChipComponent,
	SukuRatingComponent,
	SukuRatingLineItemComponent,
	SukuLinkComponent,
	SukuAddWidgetComponent,
	SukuSelectInputComponent,
	SukuNavSubmenuComponent,
	SukuBidInfoComponent,
	SukuSearchInputComponent,
	SukuProfileWidgetComponent,
	SukuStarBadgeComponent,
	SukuHeadingNestComponent,
	SukuCardTitleComponent,
	SukuCardListComponent,
	SukuSubNestHeadingComponent,
	SukuInputComponent,
	SukuResponseComponent,
	SukuTreeComponent,
	DynamicFormComponent,
	SukuTrackProgressBarComponent,
	SukuTrackTraceProductSearchComponent,
	SukuTransactionHistoryComponent,
	SukuDwollaFundingAgreementComponent,
	SukuBeneficialOwnerComponent,
	SukuDwollaFundingSourceComponent,
	SukuTextEditorComponent,
	SukuProposalHeaderComponent,
	SukuOptionModalComponent,
	SukuProposalOptionModalComponent,
	SukuDoughnutChartWidgetComponent,
	SukuListProposalChoiceWidgetComponent,
	SukuBidWidgetTagComponent,
	SukuDateComponent,
	SukuShippingInfoWidgetComponent,
	SukuSocialIconsComponent,
	SukuTermsAndConditionsComponent,
	SukuHeaderComponent,
	SukuCardLineTypeTwoComponent,
	SukuRatingCardLineComponent,
	SukuProgressBarTypeOneComponent,
	SukuProgressBarTypeTwoComponent,
	SukuPaymentPortalHelpComponent,
	SukuProfileHeaderComponent,
	SukuFundingSourceComponent,
	SukuCreateCustomerComponent,
	SukuLoaderComponent,
	SukuChatWidgetComponent,
	SukuGovernanceFilterComponent
];
