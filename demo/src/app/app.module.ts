import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NgxdDemoModule} from './components';
import {NgbdSharedModule} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    GettingStarted
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    NgxdDemoModule,
    NgbdSharedModule
  ],
  bootstrap: [AppComponent]
})
export class NgxdModule {
}
