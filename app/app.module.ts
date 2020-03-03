
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DemoAlertTimeoutComponent } from './app/ngx-bootstrap-demos/dismiss-on-timeout';
import { AppComponent } from './app/app.component';
import { VisComponent } from './app/vis/vis.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule, BsDropdownModule, ModalModule, PopoverModule } from 'ngx-bootstrap';
import { PopoverComponent } from './app/ngx-bootstrap-demos/popover.component';
import { VistimelineComponent } from './app/vistimeline/vistimeline.component';
import { VistimelineGroupsComponent } from './app/vistimeline-groups/vistimeline-groups.component';	

@NgModule({
  declarations: [
    DemoAlertTimeoutComponent,
    AppComponent,
    VisComponent,
    PopoverComponent,
    VistimelineComponent,
    VistimelineGroupsComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    FormsModule,
    PopoverModule.forRoot(),		  
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
