import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../models/usuario.model";
import {SalvarService} from "../../services/salvar.service";
import { Storage } from "../../models/storage.model";
import {Route, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {AddProdutosComponent} from "../add-produtos/add-produtos.component";
import {DialogTokenComponent} from "../dialog-token/dialog-token.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastro-token',
  templateUrl: './cadastro-token.component.html',
  styleUrls: ['./cadastro-token.component.scss']
})
export class CadastroTokenComponent implements OnInit {
  usuario: Usuario;
  token;
  emailValidate = new FormControl('',
    [Validators.required,
                  Validators.email]);
  constructor(private generate: SalvarService,
              private navegador: Router, private snackbar: MatSnackBar, private root: AppComponent, private dialog: MatDialog)
  {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuario"))
  }

  subsDialog(token: any){
    this.dialog.open(DialogTokenComponent, {
      data: {token: token, usuario: this.usuario}
    });
  }


  gerarToken(){

  }
}
