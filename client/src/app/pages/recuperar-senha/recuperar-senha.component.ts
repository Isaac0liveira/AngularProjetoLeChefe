import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Usuario} from "../../models/usuario.model";
import {SalvarService} from "../../services/salvar.service";
import {AppComponent} from "../../app.component";
import {MatSnackBar} from "@angular/material/snack-bar";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})

export class RecuperarSenhaComponent implements OnInit {
  usuario: Usuario
  matcher = new MyErrorStateMatcher();
  hide = true;
  senhaValidate: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private navegador: Router, private update: SalvarService, private root: AppComponent) {
    this.usuario = JSON.parse(localStorage.getItem("usuario"))
    this.senhaValidate = this.formBuilder.group({
      senha: ['', [Validators.required]],
      confirmaSenha: ['']
    }, { validator: this.confirmaSenhas("senha", "confirmaSenha") });
  }
  confirmaSenhas(campo: string, outroCampo: string){
    return (group: FormGroup) =>{ // here we have the 'passwords' group
      let senha = group.controls[campo].value;
      let confirmaSenha = group.controls[outroCampo].value;

      return senha === confirmaSenha ? null : { senhaDiferente: true }
    }
  }

  ngOnInit(): void {
  }

  save(){

  }

}
