import { Usuario } from './../../models/usuario.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent implements OnInit {
  usuario: Usuario;
  constructor(
    public dialogRef: MatDialogRef<DialogLoginComponent>,
    private dialog: MatDialog,
    private login: LoginService,
    private navegador: Router,
    private snackBar: MatSnackBar)
  {
    this.usuario = new Usuario(); }

  ngOnInit(): void {
  }

  data
  post(): void {
    if(this.usuario.usuario != '123'){
    this.usuario.idUsuario = 1
    this.usuario.nome = 'Teste'
    this.usuario.bairro = 'Teste'
    this.usuario.cidade = 'Teste'
    this.usuario.rua = 'Teste'
    this.usuario.complemento = 'Teste'
    this.usuario.foto = 'Teste'
    this.usuario.email = 'Teste'
    this.usuario.telefone = 'Teste'
    this.usuario.logged = true
    localStorage.setItem("usuario", JSON.stringify(this.usuario))
    this.snackBar.open("Dados encontrados, seja bem vindo!", 'x', {
      duration: 2000,
      panelClass: ['snackbar'],
    });
    this.dialogRef.close({update: true})
  }else {
      localStorage.setItem('superusuario', JSON.stringify({
        adm: true,
        usuario: 'Teste Adm',
        senha: 'Teste'
      }))
      this.snackBar.open('Bem Vindo Administrador!', 'x', {
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "end",
        panelClass: ['snackbar'],
      });
      this.dialogRef.close({update: true})
    }
  }

  enterEvent(event: KeyboardEvent){
    if(event.key == "Enter"){
      this.post()
    }
}

  navigate(string: string){
    this.navegador.navigateByUrl(`${string}`);
    this.dialog.closeAll()
  }
}
