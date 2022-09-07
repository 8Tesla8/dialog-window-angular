import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogButtonsComponent, DialogTitleComponent } from './dialog-window';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,

    DialogButtonsComponent,
    DialogTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

    TranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
