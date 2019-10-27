import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // [*AppBar]
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // [*Form] Necessario para utilizar os Forms HTML

// [*Rest: A importacao do servico nao é automatica]
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';

// [*SPA] Componentes da aplicacao
import { HomeComponent } from './home/home.component';
import { NiversComponent, NiverComponentItem } from './nivers/nivers.component';
import { HooksComponent } from './hooks/hooks.component';
import { CustomerComponent } from './customer/customer.component';

// [*Portinari]
import { PoModule } from '@portinari/portinari-ui';

//[*Router]
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nivers', component: NiversComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HooksComponent,
    NiversComponent,
    NiverComponentItem,
    CustomerComponent
  ],
  imports: [
    PoModule, // [*Portinari UI]
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES) // [*Router]
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
