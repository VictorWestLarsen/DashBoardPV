import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FeedsComponent } from './feeds/feeds.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'feeds', component: FeedsComponent},
  {path: 'overview', component: OverviewComponent},
  // otherwise redirect to login
  {path: '**', redirectTo: ''}

];
export const routing = RouterModule.forRoot(appRoutes);
