import { Component, OnInit } from '@angular/core';
import {SalvarService} from "../../services/salvar.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/usuario.model";
import {FormControl, Validators} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogTokenComponent} from "../dialog-token/dialog-token.component";

@Component({
  selector: 'app-recuperar-senha-token',
  templateUrl: './recuperar-senha-token.component.html',
  styleUrls: ['./recuperar-senha-token.component.scss']
})
export class RecuperarSenhaTokenComponent implements OnInit {
  token;
  usuario: Usuario;
  usuarioValidate = new FormControl('',
    [Validators.required,
      Validators.pattern("^[A-Z a-z 0-9]*$")]);
  tokenValidate = new FormControl('',
    [Validators.required,
      Validators.maxLength(6)]);
  constructor(private generate: SalvarService,
              private navegador: Router, private dialog: MatDialog) { this.usuario = new Usuario()}

  ngOnInit(): void {
  }

  subsDialog(token: any){
    this.dialog.open(DialogTokenComponent, {
      data: {token: token, usuario: this.usuario, recuperar: true}
    });
  }
}
