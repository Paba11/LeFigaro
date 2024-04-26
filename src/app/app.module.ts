import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from './components/header/header.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
