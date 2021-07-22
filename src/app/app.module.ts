import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import { ListManualComponent } from './list-manual/list-manual.component';
import { ListServiceComponent } from './list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ListManualComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule, HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
