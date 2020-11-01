import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {FormControl} from "@angular/forms";
import {SalvarService} from "../../services/salvar.service";
import {AppComponent} from "../../app.component";
@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.scss']
})
export class MenuPerfilComponent implements OnInit {
  usuario: Usuario
  constructor(private editar: SalvarService, private root: AppComponent) {this.usuario = JSON.parse(localStorage.getItem("usuario")) }


  ngOnInit(): void {
    if (localStorage.getItem("superusuario") != null){
      history.back()
    }
    this.root.ngOnInit()
    this.root.toggle(false)
  }

  edit(){

  }

}
