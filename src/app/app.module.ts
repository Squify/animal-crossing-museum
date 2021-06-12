import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsListComponent } from './pages/bugs-list/bugs-list.component';
import { FishListComponent } from './pages/fish-list/fish-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FishDetailsComponent } from './pages/fish-details/fish-details.component';
import { BugsDetailsComponent } from './pages/bugs-details/bugs-details.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { LocationPipe } from './pipes/location.pipe';
import { FishComponent } from './components/fish/fish.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArtListComponent } from './pages/art-list/art-list.component';
import { ArtComponent } from './components/art/art.component';
import { ArtDetailsComponent } from './pages/art-details/art-details.component';
import { FossilListComponent } from './pages/fossil-list/fossil-list.component';
import { FossilComponent } from './components/fossil/fossil.component';
import { FossilDetailsComponent } from './pages/fossil-details/fossil-details.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    NgbAccordionModule,
    MatTooltipModule,
    NgbAlertModule
  ],
  declarations: [
    AppComponent,
    BugsListComponent,
    BugsComponent,
    BugsDetailsComponent,
    FishListComponent,
    FishComponent,
    FishDetailsComponent,
    LocationPipe,
    DashboardComponent,
    ArtListComponent,
    ArtComponent,
    ArtDetailsComponent,
    FossilListComponent,
    FossilComponent,
    FossilDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
