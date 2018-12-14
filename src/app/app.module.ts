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
@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    WebComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [
    WebComponentsServices
  ],
  bootstrap: [AppComponent],
  entryComponents: [DocumentationComponent, WebComponents],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {
  ngDoBootstrap() { }
}
