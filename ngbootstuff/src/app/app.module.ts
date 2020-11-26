import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';
import { DxMapModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DxMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
