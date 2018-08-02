import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './dashboard/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './dashboard/help/help.component';
import { MapComponent } from './dashboard/map/map.component';
import { MessageComponent } from './dashboard/message/message.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { TripHistoryComponent } from './dashboard/trip-history/trip-history.component';
import { CancelledTripsComponent } from './dashboard/trip-history/cancelled-trips/cancelled-trips.component';
import { CompletedTripsComponent } from './dashboard/trip-history/completed-trips/completed-trips.component';
import { NewRequestComponent } from './dashboard/new-request/new-request.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { UserComponent } from './dashboard/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'dashboard',
        component: ContentComponent
      },
      {
        path: 'new-request',
        component: NewRequestComponent
      },
      {
        path: 'trip-history',
        component: TripHistoryComponent
      },
      {
        path: 'cancelled-trips',
        component: CancelledTripsComponent
      },
      {
        path: 'completed-trips',
        component: CompletedTripsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
