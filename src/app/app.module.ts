import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogStorageService } from './dialog-window/service/dialog-storage.service';
import { DialogWindowService } from './dialog-window/service/dialog.service';
import { DialogWindowComponent } from './dialog-window/window/dialog-window.component';

@NgModule({
  declarations: [
    AppComponent,

    DialogWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    DialogWindowService,
    DialogStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
