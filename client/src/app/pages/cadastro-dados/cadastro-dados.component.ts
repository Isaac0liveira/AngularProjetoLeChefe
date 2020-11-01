import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../models/usuario.model";
import {SalvarService} from "../../services/salvar.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastro-dados',
  templateUrl: './cadastro-dados.component.html',
  styleUrls: ['./cadastro-dados.component.scss']
})
export class CadastroDadosComponent implements OnInit {
  usuario;
  nomeValidate = new FormControl('',
    [Validators.required, Validators.minLength(6)]);
   ruaValidate = new FormControl('',
    [Validators.required,
       Validators.minLength(4)]);
  cidadeValidate = new FormControl('',
    [Validators.required,
       Validators.minLength(2)]);
  phoneValidate = new FormControl('',
    [Validators.required, Validators.pattern("[0-9]*$"),
      Validators.minLength(8), Validators.maxLength(11)]);
  constructor( private navegador: Router, private cadastrar: SalvarService, private snackbar: MatSnackBar) {this.usuario = new Usuario()}

  ngOnInit(): void {
  }

  save(){

  }

}
