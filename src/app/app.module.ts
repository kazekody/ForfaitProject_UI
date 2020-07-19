import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {Variables} from './Variables';
import { SuccessForfaitComponent } from './success-forfait/success-forfait.component';
import { NewForfaitComponent } from './new-forfait/new-forfait.component';
import { BestForfaitComponent } from './best-forfait/best-forfait.component';
import { ListForfaitComponent } from './list-forfait/list-forfait.component';
import { SelectForfaitComponent } from './select-forfait/select-forfait.component';




const routes: Routes = [
    {
      path: 'newForfait',
      component: NewForfaitComponent
   },
   {
    path: 'successForfait',
    component: SuccessForfaitComponent
  },
  {
    path: 'bestForfait',
    component: BestForfaitComponent
  },
  {
    path: 'listForfait',
    component: ListForfaitComponent
  },
  {
    path: 'selectForfait',
    component: SelectForfaitComponent
  },
];

export const ROUTING = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    SuccessForfaitComponent,
    NewForfaitComponent,
    BestForfaitComponent,
    ListForfaitComponent,
    SelectForfaitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Variables],
  bootstrap: [AppComponent]
})
export class AppModule { }
