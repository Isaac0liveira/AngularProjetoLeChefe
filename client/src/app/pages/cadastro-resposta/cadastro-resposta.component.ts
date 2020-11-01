import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {SalvarService} from "../../services/salvar.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastro-resposta',
  templateUrl: './cadastro-resposta.component.html',
  styleUrls: ['../cadastro-token/cadastro-token.component.scss']
})
export class CadastroRespostaComponent implements OnInit {
  usuario: Usuario
  constructor(private cadastrar: SalvarService, private navegador: Router,  private snackbar: MatSnackBar)
  {this.usuario = JSON.parse(localStorage.getItem("usuario")),
  this.usuario.resposta = ''}

  ngOnInit(): void {

  }

  save(){

  }


}
