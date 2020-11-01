import { Component, OnInit } from '@angular/core';
import {SalvarService} from "../../services/salvar.service";
import {Router} from "@angular/router";
import {Usuario} from "../../models/usuario.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-recuperar-palavra',
  templateUrl: './recuperar-palavra.component.html',
  styleUrls: ['./recuperar-palavra.component.scss']
})
export class RecuperarPalavraComponent implements OnInit {
  usuario: string = '';
  palavra: string = '';
  constructor(private request: SalvarService, private navegador: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  recuperar() {
  }
}
