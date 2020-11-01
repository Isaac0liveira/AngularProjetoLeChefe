import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {SalvarService} from "../../services/salvar.service";
import {Produto, ProdutoModel} from "../../models/produto.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogCheckoutComponent} from "../dialog-checkout/dialog-checkout.component";
import {Observable, timer} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as moment from "moment";
import io from 'socket.io-client';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  produtos;
  produtoModel: ProdutoModel;
  precoTotal: number = 0;
  precoEntrega: number = 0;
  quantia: number;
  bairro: string;
  endereco: string;
  isDelivery: boolean;
  metodoPagamento: string = "Forma de Pagamento";
  compraId: number;
  triggerConfirma: boolean;
  cartaoTipo: string;
  contagem: number = 0;
  sucesso = false;
  constructor(private navegador: Router, public change: ChangeDetectorRef, private send: SalvarService, private root: AppComponent, private id: SalvarService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {}


  ngOnInit(): any {

  }

  zerarContagem(index: number){
    const numbers = timer(1000, 1000);
    numbers.subscribe(x => { if(x == 5){
      if(this.produtos[index]) {
        this.produtos[index].contagem = 0;
      }
    }});
  }

  clickDelete(index: number){
    if(this.produtos[index].contagem == 1){
      this.produtos.splice(index, 1);
      sessionStorage.setItem('carrinho', JSON.stringify(this.produtos));
      this.ngOnInit()
    }else{
      this.snackBar.open('Clique novamente para deletar o produto', 'x', {
        duration: 2000,
        panelClass: ['snackbar'],
      });
      this.produtos[index].contagem = 1;
      this.zerarContagem(index)
    }
  }

  subsDialog(): Observable<any> {
    const dialogRef = this.dialog.open(DialogCheckoutComponent, {
      data: {precoProduto: this.precoTotal, cliente: JSON.parse(localStorage.getItem('usuario'))},
      panelClass: ['my-panel', 'animated', 'fadeInUp'],
      width: "100%",
      maxHeight: "500px",
    });
    return dialogRef.afterClosed();
  }

  openDialog(){

  }

  salvarPagamento(sucesso){

  }

  salvarProduto(){

  }

}
