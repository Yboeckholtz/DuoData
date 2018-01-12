import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { LocatiesComponent} from './locaties/locaties.component';

import { OverviewService } from '../app/services/overview.service';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { OverviewListComponent } from './overview/overview-list/overview-list.component';
import { OverviewDetailComponent } from './overview/overview-detail/overview-detail.component';
import { OverviewItemComponent } from './overview/overview-list/overview-item/overview-item.component';
// import { OverviewDetailEditComponent } from './overview/overview-detail/overview-detail-edit/overview-detail-edit.component';

const appRoutes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'locaties', component: LocatiesComponent}
]

  @NgModule({
    declarations: [
      AppComponent,
      OverviewComponent,
      HeaderComponent,
      LocatiesComponent,
      OverviewListComponent,
      OverviewDetailComponent,
      OverviewItemComponent,
      // OverviewDetailEditComponent
        ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [
      OverviewService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
