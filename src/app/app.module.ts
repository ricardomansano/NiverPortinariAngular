import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // [*AppBar]
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // [*Form] Necessario para utilizar os Forms HTML

// [*SPA] Componentes da aplicacao
import { HomeComponent } from './home/home.component';
import { NiversComponent, NiverComponentItem } from './nivers/nivers.component';
import { HooksComponent } from './hooks/hooks.component';

// [*Portinari]
import { PoModule } from '@portinari/portinari-ui';

//[*Router]
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nivers', component: NiversComponent },
  { path: 'hooks', component: HooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HooksComponent,
    NiversComponent,
    NiverComponentItem
  ],
  imports: [
    PoModule, // [*Portinari UI]
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES) // [*Router]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
