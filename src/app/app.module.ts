import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MotorListComponent } from './motor-list/motor-list.component';

import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import { CreateMotorComponent } from './create-motor/create-motor.component';
import { MotorRangeComponent } from './motor-range/motor-range.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMotorComponent,
    MotorListComponent,
    MotorRangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
