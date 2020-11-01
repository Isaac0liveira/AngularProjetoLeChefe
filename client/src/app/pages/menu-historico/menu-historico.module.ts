import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MenuHistoricoComponent} from "./menu-historico.component";

const routes: Routes = [
  { path: '', component: MenuHistoricoComponent}
];

@NgModule({
  declarations: [],
  providers: [DatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatLineModule,
    MatListModule
  ]
})
//@ts-ignore
export class MenuHistoricoModule { }
