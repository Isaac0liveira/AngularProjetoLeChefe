import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {ProdutosBatataComponent} from "./produtos-batata.component";

const routes: Routes = [
  { path: '', component: ProdutosBatataComponent}
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
export class ProdutosBatataModule { }
