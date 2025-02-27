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
import { NguCarouselModule } from '@ngu/carousel';
import { GoogleChartsModule } from 'angular-google-charts';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { SukuDoughnutChartWidgetComponent } from './webcomponents/suku-doughnut-chart-widget/suku-doughnut-chart-widget.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SukuModalModule, SukuBidTagModule, SukuWebcomponentsService } from 'suku-webcomponents';
// SukuAchSettingModule removed 
import { SukuLoaderModule } from './webcomponents/suku-loader/suku-loader.module';
// import { SukuACHSettingsComponent } from './webcomponents/suku-achsettings/suku-achsettings.component';
import { SukuResponseComponent  } from './webcomponents/suku-response/suku-response.component';
import { ScrollToBottomDirective } from './webcomponents/suku-chat-widget/suku-chat-scroll-directive'
@NgModule({
	declarations: [AppComponent, DocumentationComponent, WebComponents,SukuResponseComponent,
		ScrollToBottomDirective,],
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
		NgxJsonViewerModule,
		SukuModalModule,
		SukuBidTagModule,
		// SukuAchSettingModule,
		// SukuACHSettingsComponent,
		// SukuResponseComponent,
		SukuLoaderModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [WebComponentsServices, SukuGovernanceWebcomponentsService],
	bootstrap: [AppComponent],
	entryComponents: [DocumentationComponent,
		WebComponents,
		SukuDoughnutChartWidgetComponent],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(private sukuService: SukuGovernanceWebcomponentsService, private sukuWebService: SukuWebcomponentsService) {
		this.sukuService.setSukuTheme();
		this.sukuWebService.setSukuTheme();
	}
	ngDoBootstrap() { }
}
