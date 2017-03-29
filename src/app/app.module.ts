import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';
//import { DashboardComponent }   from './dashboard.component';
//import { HeroDetailComponent }  from './hero-detail.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroService }          from './hero.service';
import { TestComponent }  from './components/test/test.component';

import { TestService }          from './provide/services/test.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
   declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ TestService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
