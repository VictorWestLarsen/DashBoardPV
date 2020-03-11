import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FeedsComponent } from './feeds/feeds.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

const appRoutes: Routes = [
  {path: '/details', component: DetailsComponent},
  {path: '/feeds', component: FeedsComponent},
  {path: '/login', component: LoginComponent },
  {path: '/overview', component: OverviewComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
