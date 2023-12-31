import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2 } from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAComponent } from './md-service/cp-a/cp-a.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atv-modulo/cp-tela/cp-tela.component';

const routes: Routes = [
  { path: 'exemplo-binding', component: ExemploBindingComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'diretiva-ng-class', component: DiretivaNgClassComponent },
  { path: 'diretiva-ng-style', component: DiretivaNgStyleComponent},
  { path: 'diretiva-ng-model', component: DiretivaNgModelComponent},
  { path: 'diretiva-ng-if', component: DiretivaNgIfComponent},
  { path: 'diretiva-ng-for', component: DiretivaNgForComponent},
  { path: 'diretiva-ng-switch', component: DiretivaNgSwitchComponent},
  { path: 'exemplo-pipes', component: ExemploPipesComponent},
  { path: 'microondas', component: MicroondasComponent},
  { path: 'pai-filho', component: CpPaiComponent},
  { path: 'filho-pai', component: CpPaiComponent2},
  { path: 'cp-a', component: CpAComponent},
  { path: 'cp-agrupador', component: CpAgrupadorComponent},
  { path: 'cp-tela', component: CpTelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }