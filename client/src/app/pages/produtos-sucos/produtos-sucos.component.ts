import { Component, OnInit } from '@angular/core';
import {Produto} from "../../models/produto.model";
import {SalvarService} from "../../services/salvar.service";
import {AppComponent} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable, timer} from "rxjs";
import {DialogAdmProdutosComponent} from "../dialog-adm-produtos/dialog-adm-produtos.component";
import {AddProdutosComponent} from "../add-produtos/add-produtos.component";
import {newArray} from "@angular/compiler/src/util";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'app-produtos-sucos',
  templateUrl: './produtos-sucos.component.html',
  styleUrls: ['../produtos-bebidas/produtos-bebidas.component.scss']
})
export class ProdutosSucosComponent implements OnInit {
  carrinho;
  produto;
  adm;
  contagem: number = 0
  constructor(private get: SalvarService, private snackbar: MatSnackBar, private spinner: SpinnerService, private root: AppComponent, private dialog: MatDialog) {
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

  deletarProduto(produto: Produto) {
  }



  subsDialog(produto: Produto): Observable<any> {
        const dialogRef = this.dialog.open(DialogAdmProdutosComponent, {
      data: {produtoNome: produto.nome, produtoPreco: produto.preco,
        produtoFoto: produto.arquivo, haveSub: false, esgotado: produto.esgotado, tipo: produto.tipo, subTipo: produto.subTipo,
        //@ts-ignore
        observacao: produto.descricao, idProduto: produto.id}
    });
    return dialogRef.afterClosed();
  }

  subsDialogAdd(): Observable<any> {
    const dialogRef = this.dialog.open(AddProdutosComponent, {
      data: {tipo: "sucos", subTipo: false}
    });
    return dialogRef.afterClosed();
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
      this.snackbar.open('Produto adicionado ao carrinho!', 'x', {
        duration: 2000,
        panelClass: ['snackbar'],
      });
      this.root.ngOnInit()
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
      let produtoFiltro = entityInstance.filter(e => e.tipo == "sucos")
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
