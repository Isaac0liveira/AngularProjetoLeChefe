import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SalvarService} from "../../services/salvar.service";
import {AppComponent} from "../../app.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogHistoricoComponent} from "../dialog-historico/dialog-historico.component";
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import {ProdutoModel} from "../../models/produto.model";
import {timer} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DialogInfoComponent} from "../dialog-info/dialog-info.component";

@Component({
  selector: 'app-menu-historico',
  templateUrl: './menu-historico.component.html',
  styleUrls: ['../carrinho/carrinho.component.scss']
})
export class MenuHistoricoComponent implements OnInit {
  dados;
  adm = false;
  credito = 0;
  debito = 0;
  dinheiro = 0;
  total = 0;
  listaHistorico;
  datePipeString: string;
  constructor(private datePipe: DatePipe, private snackbar: MatSnackBar, private root: AppComponent, private navegador: Router, public dialog: MatDialog, private get: SalvarService)
  {
    this.datePipeString = datePipe.transform(Date.now(),'dd-MM-yyyy HH:mm');
    this.root.toggleBack(true)
  }


  ngOnInit(): void {
    this.root.ngOnInit()
    if (localStorage.getItem('usuario') != undefined && localStorage.getItem('usuario') != "[]") {
      this.adm = false;
      this.listaHistorico = new Array()
    }else if(localStorage.getItem('superusuario') != null && localStorage.getItem('superusuario') != "[]"){
      this.adm = true;
      this.listaHistorico = new Array()
  } else {
      this.navegador.navigateByUrl('inicio');
    }
    const numbers = timer(3000, 1000);
    numbers.subscribe(x => { if(x == 60){
      window.location.reload()
    }});
  }
  clickDelete(index: number) {
   this.snackbar.open("Pedido Cancelado com Sucesso!", 'x', {
      duration: 2000,
      panelClass: ['AdmSnackbar'],
    });
  }


  escolhaBairro(bairro){
    let precoEntrega: number = 0;
    if(bairro == "residencial1" || bairro == "residencial2"){
      precoEntrega = 2
    }else if(bairro == "jardinsdaserra" || bairro == "luzardoviana" || bairro == "maracanazinho" || bairro == "piratininga" || bairro == "novo"){
      precoEntrega = 3
    }else if(bairro == "mucuna"){
      precoEntrega = 4
    }else if(bairro == "jereissati1" || bairro == "jereissati2" || bairro == "timbo" || bairro == "lagoaparque"){
      precoEntrega = 5
    }else if(bairro == "acaracuzinho"){
      precoEntrega = 7
    }
    return precoEntrega
  }


  calcularValorCarrinho(produto){
    let valorTotal = 0
    produto.map(p => {
      valorTotal += p.valorTotal
    })
    return valorTotal
  }

  openDialogInfo(produto){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {produto: produto};
    dialogConfig.maxWidth = "300px";
    dialogConfig.maxHeight = "500px";
    dialogConfig.panelClass = ['my-panel', 'animated', 'fadeInUp']
    const dialogRef = this.dialog.open(DialogInfoComponent, dialogConfig);
  }

  getValor(array: []): number {
    let valorTotal = 0
    for (let i = 0; i < array.length; i++) {
      //@ts-ignore
      valorTotal += array[i].valorTotal
    }
    return valorTotal
  }

  formatData(string: string): string {
    let data: moment.Moment = moment(string, "DD-MM-YYYYHH:mm")
    return data.format("DD/MM/YYYY HH:mm")
  }

  checkData(string: string): number {
    let data: moment.Moment = moment(string, "DD-MM-YYYY HH: mm :ss")
    data.add('minutes', 10)
    let now: moment.Moment = moment(this.datePipeString, "DD-MM-YYYYTHH:mm")
    if (now.isBefore(data)) {
      return 1
    }else if (now.isBefore(data.add('minutes', 10))) {
      return 2
    }else if (now.isBefore(data.add('minutes', 10))) {
      return 3
    }else{
      return null
    }
  }

  /*repete(index: number): any {
    let retorno = new Array()
    let separacao = new Array()
    for (let i = 0; i < this.dados.length; i++) {
      if (this.dados[i].idPedido == index) {
        retorno.push(i)
        separacao.push(this.dados[i])
      }
    }
    return [retorno, separacao]
  }*/

  openDialog(produto: ProdutoModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {produto: produto};
    dialogConfig.maxWidth = 'auto';
    dialogConfig.maxHeight = "500px";
    dialogConfig.panelClass = ['my-panel', 'animated', 'fadeInUp']
    const dialogRef = this.dialog.open(DialogHistoricoComponent, dialogConfig);
  }
}
