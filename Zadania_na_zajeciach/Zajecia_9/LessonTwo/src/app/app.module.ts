import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InnerOneComponent } from './inner-one/inner-one.component';
import { InnerTwoComponent } from './inner-two/inner-two.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerOneComponent,
    InnerTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [InnerOneComponent, InnerTwoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
