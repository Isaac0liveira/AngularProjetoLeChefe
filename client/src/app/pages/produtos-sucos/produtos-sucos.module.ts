import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {ProdutosSucosComponent} from "./produtos-sucos.component";

const routes: Routes = [
  { path: '', component: ProdutosSucosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
//@ts-ignore
export class ProdutosSucosModule { }
