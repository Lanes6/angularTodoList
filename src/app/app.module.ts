import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TachelisteComponent } from './tacheliste/tacheliste.component';
import { AddtacheComponent } from './addtache/addtache.component';
import { HistoriqueComponent } from './historique/historique.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'add', component: AddtacheComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: '', component: TachelisteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TachelisteComponent,
    AddtacheComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
