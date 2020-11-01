import { Component, OnInit } from '@angular/core';
import {Produto} from "../../models/produto.model";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-acrescimo',
  templateUrl: './dialog-acrescimo.component.html',
  styleUrls: ['../produtos-bebidas/produtos-bebidas.component.scss'],
})

export class DialogAcrescimoComponent implements OnInit {
  carrinho;
  produto;
  adm;
  contagem: number = 0;
  compra: boolean = false;
  constructor(private snackbar: MatSnackBar, private dialogRef: MatDialogRef<DialogAcrescimoComponent>) {
      this.carrinho = JSON.parse(sessionStorage.getItem("carrinho"))
  }

  ngOnInit(): void {
    this.getProduto()
  }

  fechar(){
    this.dialogRef.close({update: true})
  }

  add(produto: Produto){
    if(produto.quantidade >= 1) {
      produto.quantidade += 1;
    }else{
      produto.quantidade = 1;
    }
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
      this.snackbar.open('Acréscimo Adicionado!', 'x', {
        duration: 2000,
        panelClass: ['snackbar'],
      });
      this.compra = true;
    }else{
      this.snackbar.open('Adicione algum Acréscimo ao produto!', 'x', {
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
      let produtoFiltro = entityInstance.filter(e => e.tipo == "acrescimo")
      //@ts-ignore
      this.produto = new Array()
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
    }
  }
}

