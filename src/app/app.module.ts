import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedsComponent } from './feeds/feeds.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedsService } from './service/feeds.service';
import { LoginService} from './service/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './user';

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
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FeedsService,
    LoginService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
