import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BancaComponent } from './banche/banche.component';
import { BancaDetailComponent } from './banca-detail/banca-detail.component';
import { UtentiComponent } from './utenti/utenti.component';



const routes: Routes = [
  {path: 'banche', component: BancaComponent},
  {path: 'detail/:id', component: BancaDetailComponent},
  {path: 'detail/:id/utenti', component: UtentiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
