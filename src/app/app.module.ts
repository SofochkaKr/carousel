import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CarouselModule} from "ngx-bootstrap/carousel";
import { SliderComponent } from './slider/components/slider/slider.component';
import { NavigationComponent } from './navigation/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
