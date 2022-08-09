import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, FourthSectionComponent, FifthSectionComponent, FooterComponent, ImprintComponent, LegalNoticeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
