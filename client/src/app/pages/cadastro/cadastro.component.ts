import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import { Usuario } from "../../models/usuario.model";
import {Storage} from "../../models/storage.model";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  matcher = new MyErrorStateMatcher();
  hide = true;
  senhaValidate: FormGroup;
  usuarioValidate = new FormControl('',
    [Validators.required,
    Validators.pattern("^[A-Z a-z 0-9]*$")]);

  constructor(private formBuilder: FormBuilder, private root: AppComponent, private navegador: Router) {
    this.usuario = new Usuario();
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
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.navegador.navigateByUrl('cadastro/dados');
  }

}
