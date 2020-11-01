import {Component, Inject, OnInit} from '@angular/core';
import {CadastroTokenComponent} from "../cadastro-token/cadastro-token.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Usuario} from "../../models/usuario.model";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-token',
  templateUrl: './dialog-token.component.html',
  styleUrls: ['./dialog-token.component.scss']
})
export class DialogTokenComponent implements OnInit {
  tokenValidate = new FormControl('',
    [Validators.required,
      Validators.maxLength(6)]);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogTokenComponent>, public navegador: Router,
              private snackbar: MatSnackBar) {
    this.usuario = this.data.usuario;
    this.token = this.data.token;
    console.log(this.token)
    if(this.data.recuperar) {
      this.recuperar = this.data.recuperar
    }
  }
  usuario: Usuario;
  token;
  recuperar: boolean = false;
  ngOnInit(): void {
  }

  validarToken(){
    if(this.token == this.usuario.token){
      this.snackbar.open("Token Validado com Sucesso!", 'x', {
        duration: 2000,
        panelClass: ['AdmSnackbar'],
      });
      localStorage.setItem("usuario", JSON.stringify(this.usuario));
      if(this.recuperar == false) {
        this.navegador.navigateByUrl('cadastro/dados');
      }else{
        this.navegador.navigateByUrl('recuperar/alterar')
      }
    }else{
      this.snackbar.open("Token Inválido!", 'x', {
        duration: 2000,
        panelClass: ['AdmSnackbar'],
      });
    }
    this.dialogRef.close()
  }
}
