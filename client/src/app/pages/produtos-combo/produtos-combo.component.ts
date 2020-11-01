import { Component, OnInit } from '@angular/core';
import {SalvarService} from "../../services/salvar.service";
import {Produto} from "../../models/produto.model";
import {newArray} from "@angular/compiler/src/util";
import {AppComponent} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable, timer} from "rxjs";
import {DialogAdmProdutosComponent} from "../dialog-adm-produtos/dialog-adm-produtos.component";
import {AddProdutosComponent} from "../add-produtos/add-produtos.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SpinnerService} from "../../services/spinner.service";
import {DialogAcrescimoComponent} from "../dialog-acrescimo/dialog-acrescimo.component";

@Component({
  selector: 'app-produtos-combo',
  templateUrl: './produtos-combo.component.html',
  styleUrls: ['../produtos-bebidas/produtos-bebidas.component.scss']
})
export class ProdutosComboComponent implements OnInit {
  carrinho;
  produto;
  adm;
  contagem: number = 0
  constructor(private get: SalvarService, private spinner: SpinnerService, private snackbar: MatSnackBar ,private root: AppComponent, private dialog: MatDialog) {
    if(sessionStorage.getItem("carrinho") == null) {
      this.carrinho = new Array()
    }else{
      this.carrinho = JSON.parse(sessionStorage.getItem("carrinho"))
    }
    if(localStorage.getItem("superusuario") != null){
      this.adm = JSON.parse(localStorage.getItem("superusuario")).adm
    }else{
      this.adm = null;
    }
  }

  ngOnInit(): void {
    this.getProduto()
    this.root.ngOnInit()
  }

  add(produto: Produto){
    if(produto.quantidade >= 1) {
      produto.quantidade += 1;
    }else{
      produto.quantidade = 1;
    }
  }

  zerarContagem(produto: Produto){
    const numbers = timer(1000, 1000);
    numbers.subscribe(x => { if(x == 5){
      if(produto.contagem) {
        produto.contagem = 0;
      }
    }});
  }

  deletarProduto(produto: Produto){

  }

  subsDialog(produto: Produto): Observable<any> {
    const dialogRef = this.dialog.open(DialogAdmProdutosComponent, {
      data: {produtoNome: produto.nome, produtoPreco: produto.preco,
        produtoFoto: produto.arquivo, haveSub: false, tipo: produto.tipo, subTipo: produto.subTipo,
        //@ts-ignore
        observacao: produto.descricao, esgotado: produto.esgotado, idProduto: produto.id}
    });
    return dialogRef.afterClosed();
  }


  subsDialogAdd(): Observable<any> {
    const dialogRef = this.dialog.open(AddProdutosComponent, {
      data: {tipo: "combo", subTipo: false}
    });
    return dialogRef.afterClosed();
  }

  subsDialogAcrescimo(): Observable<any> {
    const dialogRef = this.dialog.open(DialogAcrescimoComponent, {
      maxWidth: "100%",
      maxHeight: "500px",
      panelClass: ['animated', 'fadeInUp', 'my-panel'],
      disableClose: true
    })
    return dialogRef.afterClosed();
  }

  openDialogAcrescimo(){

  }

  openDialogAdd(){

  }


  openDialog(produto: Produto){

  }





  remover(produto: Produto){
    if(produto.quantidade > 1) {
      produto.quantidade -= 1;
    }else{
      produto.quantidade = 1;
    }
  }

  sendToCarrinho(index: number){
    if(this.produto[index].quantidade >= 1){
      this.carrinho.push(this.produto[index]);
      sessionStorage.setItem("carrinho", JSON.stringify(this.carrinho));
      this.openDialogAcrescimo();
    }else{
      this.snackbar.open('Adicione algum produto', 'x', {
        duration: 2000,
        panelClass: ['AdmSnackbar'],
      });
    }
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  getProduto() {
    if (sessionStorage.getItem('produtos000') != undefined && sessionStorage.getItem('produtos000') != null ) {
      let data = JSON.parse(sessionStorage.getItem('produtos000'))
      const {entityInstance} = data
      let produtoFiltro = entityInstance.filter(e => e.tipo == "combo")
      //@ts-ignore
      this.produto = newArray()
      for (let i = 0; i < produtoFiltro.length; i++) {
        //@ts-ignore
        const imageBlob = this.dataURItoBlob(produtoFiltro[i].arquivo.arquivo);
        //@ts-ignore
        const imageFile = new File([imageBlob], produtoFiltro[i].arquivo.nome, {type: 'image/png'});
        const reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onloadend = (e) => {
          //@ts-ignore
          produtoFiltro[i].arquivo = reader.result
          this.produto.push(produtoFiltro[i]);
        }
      }
    }else{
      const numbers = timer(1000, 1000);
      numbers.subscribe(x => { if(x == 2){
        this.ngOnInit()
      }});
    }
  }

}
