import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';

const routes: Routes = [
  { path: 'exemplo-binding', component: ExemploBindingComponent },
  { path: 'imc', component: ImcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
