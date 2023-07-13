import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleImageComponent } from './vehicle-image/vehicle-image.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehicleImageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
