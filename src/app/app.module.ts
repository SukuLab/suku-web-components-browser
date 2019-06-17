import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './webcomponents/documentation/documentation';
import { WebComponents } from './webcomponents/webmodule';
import { WebComponentsServices } from './webcomponents/documentation/service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './shared/mat.module';
import { QuillModule } from 'ngx-quill';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SukuGovernanceWebcomponentsService } from './webcomponents/suku-governance-webcomponents.service';
import { SukuProposalHeaderComponent } from './webcomponents/suku-proposal-header/suku-proposal-header.component';
import { SukuOptionModalComponent } from './webcomponents/suku-proposal-option-modal/suku-option-modal.component';
import { NguCarouselModule } from '@ngu/carousel';
import { GoogleChartsModule } from 'angular-google-charts';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { SukuDoughnutChartWidgetComponent } from './webcomponents/suku-doughnut-chart-widget/suku-doughnut-chart-widget.component';
@NgModule({
	declarations: [ AppComponent, DocumentationComponent, WebComponents ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatModule,
		NguCarouselModule,
		GoogleChartsModule,
		CountdownTimerModule.forRoot(),
		QuillModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [ WebComponentsServices, SukuGovernanceWebcomponentsService ],
	bootstrap: [ AppComponent ],
	entryComponents: [ DocumentationComponent, 
		WebComponents,
		SukuProposalHeaderComponent,
		SukuOptionModalComponent,
		SukuDoughnutChartWidgetComponent ],
	schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
	constructor(private sukuService: SukuGovernanceWebcomponentsService) {
		this.sukuService.setSukuTheme();
	}
	ngDoBootstrap() {}
}
