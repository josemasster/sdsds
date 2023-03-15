import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriaComponent } from '../auditoria/auditoria.component';
import { CarguedeAchivosComponent } from '../carguede-achivos/carguede-achivos.component';
import { EjecuciondeFlujoComponent } from '../ejecucionde-flujo/ejecucionde-flujo.component';
import { GestiondeUsuariosComponent } from '../gestionde-usuarios/gestionde-usuarios.component';
import { HomeComponent } from '../home/home.component';
import { ParametrosyPlantillasComponent } from '../parametrosy-plantillas/parametrosy-plantillas.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"carguedearchivos", component:CarguedeAchivosComponent},
  {path:"parametroyplantillas", component:ParametrosyPlantillasComponent},
  {path:"ejecuciondeflujos", component:EjecuciondeFlujoComponent},
  {path:"gestiondeusuarios", component:GestiondeUsuariosComponent},
  {path:"auditoria", component:AuditoriaComponent,} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
