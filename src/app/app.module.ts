import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedsComponent } from './feeds/feeds.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedsService } from './feeds/feeds.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedsComponent,
    OverviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    FeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
