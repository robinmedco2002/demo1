import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BtnfunComponent } from './share/btnfun/btnfun.component';
import { SimpleformComponent } from './share/simpleform/simpleform.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UserchildComponent } from './share/userchild/userchild.component';
import { UserchildtoparentComponent } from './share/userchildtoparent/userchildtoparent.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { DataapiComponent } from './share/dataapi/dataapi.component';
import { TdfComponent } from './share/tdf/tdf.component';
import { HomeComponent } from './share/home/home.component';
import { AboutComponent } from './share/about/about.component';

import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    BtnfunComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    UserchildComponent,
    UserchildtoparentComponent,
    PageNotFoundComponent,
    DataapiComponent,
    TdfComponent,
    HomeComponent,
    AboutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


