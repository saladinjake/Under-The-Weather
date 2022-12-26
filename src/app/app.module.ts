import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucideAngularModule, Search, Cloud, Sun, Wind, Droplets, MapPin, Compass } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Search, Cloud, Sun, Wind, Droplets, MapPin, Compass })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
