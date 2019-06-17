import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SukuListProposalHeaderComponent } from './suku-list-proposal-header/suku-list-proposal-header.component';
import { SukuGovernanceFilterComponent } from './suku-governance-filter/suku-governance-filter.component';
import { createCustomElement } from '@angular/elements';
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatIconModule,
	MatInputModule,
	MatDatepickerModule,
	MatRadioModule,
	MatDialogModule,
	MatNativeDateModule
} from '@angular/material';
import { SukuProposalHeaderComponent } from './suku-proposal-header/suku-proposal-header.component';
import { SukuGovernanceWebcomponentsService } from './suku-governance-webcomponents.service';
import { SukuProposalOptionModalComponent } from './suku-proposal-option-modal/suku-proposal-option-modal.component';
import { SukuUsersWidgetComponent } from './suku-users-widget/suku-users-widget.component';
import { SukuListProposalChoiceWidgetComponent } from './suku-list-proposal-choice-widget/suku-list-proposal-choice-widget.component';
import { SukuOptionModalComponent } from './suku-proposal-option-modal/suku-option-modal.component';
import { SukuDoughnutChartWidgetComponent } from './suku-doughnut-chart-widget/suku-doughnut-chart-widget.component';
import { ChartsModule } from 'ng2-charts';
import { NguCarouselModule } from '@ngu/carousel';
import { GoogleChartsModule } from 'angular-google-charts';
import { SukuModalService } from './suku-proposal-option-modal/suku-modal.service';
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
	declarations: [
		SukuListProposalHeaderComponent,
		SukuGovernanceFilterComponent,
		SukuProposalHeaderComponent,
		SukuProposalOptionModalComponent,
		SukuUsersWidgetComponent,
		SukuListProposalChoiceWidgetComponent,
		SukuOptionModalComponent,
		SukuDoughnutChartWidgetComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatInputModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCardModule,
		ChartsModule,
		MatDialogModule,
		MatCardModule,
		NguCarouselModule,
		GoogleChartsModule,
		CountdownTimerModule.forRoot()
	],
	entryComponents: [ SukuListProposalHeaderComponent, SukuOptionModalComponent, SukuUsersWidgetComponent ],
	providers: [ SukuGovernanceWebcomponentsService, SukuModalService ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	exports: [
		SukuListProposalHeaderComponent,
		SukuGovernanceFilterComponent,
		SukuUsersWidgetComponent,
		SukuListProposalChoiceWidgetComponent,
		SukuProposalOptionModalComponent,
		SukuOptionModalComponent,
		SukuDoughnutChartWidgetComponent
	]
})
export class SukuGovernanceWebcomponentsModule {
	constructor(private injector: Injector, public themeService: SukuGovernanceWebcomponentsService) {
		this.themeService.setSukuTheme();
		const elements: any[] = [
			[ SukuListProposalHeaderComponent, 'suku-list-proposal-header' ],
			[ SukuUsersWidgetComponent, 'suku-users-widget' ]
		];
		for (const [ component, name ] of elements) {
			const el = createCustomElement(component, { injector: this.injector });
			customElements.define(name, el);
		}
	}
	ngDoBootstrap() {
	}
}
