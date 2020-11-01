import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../models/usuario.model";
import {Observable} from "rxjs";
import {RetornoDados, RetornoUsuario} from "../models/retorno.model";
import {map} from "rxjs/operators";
import {Md5} from "ts-md5";
import {Produto, ProdutoModel} from '../models/produto.model';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SalvarService {
  precoEntrega: number
  quantia: number
  metodoPagamento: string
  constructor(private http: HttpClient, private dialog: MatDialog, private snackbar: MatSnackBar) {}

  headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  postApi(usuario: Usuario){

   /* const body = `email=${usuario.email}`;
    return this.http.post('???.???/sendEmail', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

    */
  }

  postRecoverApi(palavra: string, usuario: string){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*const body = `usuario=${usuario}&resposta=${palavra}`;
    return this.http.post('???.???/getSecurityResponse', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
     */
  }

  changePassApi(usuario: Usuario) {
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const md5 = new Md5();
    const senha = md5.appendStr(`${usuario.senha}`).end()
    const body = `usuario=${usuario.usuario}&senha=${senha}`;
    return this.http.post('???.???/changePass', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
     */
  }

  getTime(){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.get('???.???/checkTime');

     */
  }

  saveApi(usuario: Usuario){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const md5 = new Md5();
    const senha = md5.appendStr(`${usuario.senha}`).end()
    const body = `usuario=${usuario.usuario}&senha=${senha}&email=${usuario.email}&resposta=${usuario.resposta}`;
    return this.http.post('???.???//save', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  saveDadosApi(usuario: Usuario){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const body = `nome=${usuario.nome}&bairro=${usuario.bairro}&cidade=${usuario.cidade}&rua=${usuario.rua}&celular=${usuario.celular}&telefone=${usuario.telefone}&complemento=${usuario.complemento}&foto=${usuario.nome}`;
    return this.http.post('???.???/save', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  editDadosApi(usuario: Usuario){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
  const body = `usuario=${usuario.usuario}&nome=${usuario.nome}&bairro=${usuario.bairro}&cidade=${usuario.cidade}&rua=${usuario.rua}&celular=${usuario.celular}&telefone=${usuario.telefone}&complemento=${usuario.complemento}&foto=${usuario.nome}`;
  return this.http.post('???.???//edit', body, {headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  })

     */
}

  editProduto(produto: ProdutoModel, name, type, size, esgotado){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.post(`???.???/?idProduto=${produto.id}&nome=${produto.nome}&descricao=${produto.observacao}&preco=${produto.preco}&tipo=${produto.tipo}&subTipo=${produto.subTipo}&nomeArquivo=${name}&tipoArquivo=${type}&tamanhoArquivo=${size}&esgotado=${esgotado}`
      , produto.fotoProduto)

     */
  }

  saveProduto(produto: ProdutoModel, name, type, size, esgotado){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.post(`???.???/?nome=${produto.nome}&descricao=${produto.observacao}&preco=${produto.preco}&tipo=${produto.tipo}&subTipo=${produto.subTipo}&nomeArquivo=${name}&tipoArquivo=${type}&tamanhoArquivo=${size}&esgotado=${esgotado}`,
      produto.fotoProduto,
    )

     */
  }


  getProduto(produto: Produto){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.get('???.???/cardapio', {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  enviarProduto(produto: Produto, clienteID: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const body = `idPedido=${produto.idPedido}&valorTotal=${produto.quantidade * produto.preco}&observacao=${produto.observacao}&idCardapio=${produto.id}&quantidade=${produto.quantidade}&idCliente=${clienteID}&bairro=${produto.bairro}&endereco=${produto.endereco}&isDelivery=${produto.isDelivery}`
    return this.http.post('???.???/save', body,{headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  enviarCheckout(idPedido: number, valorTotal: number, metodo: string, submetodo?: string, taxaEntrega?:number, troco?: number, totalRecebido?: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    let body;
      if(metodo == "Cartão"){
        if(submetodo == "Crédito"){
          body = `idPedido=${idPedido}&dinheiro=${0}&debito=${0}&credito=${valorTotal}&troco=${0}&valorTotal=${valorTotal}&taxaEntrega=${taxaEntrega}&totalRecebido=${0}`
        }
        else if(submetodo == "Débito"){
          body = `idPedido=${idPedido}&dinheiro=${0}&debito=${valorTotal}&credito=${0}&troco=${0}&valorTotal=${valorTotal}&taxaEntrega=${taxaEntrega}&totalRecebido=${0}`
        }
      }
      else if(metodo == "Dinheiro"){
        body = `idPedido=${idPedido}&dinheiro=${valorTotal}&debito=${0}&credito=${0}&troco=${troco}&valorTotal=${valorTotal}&taxaEntrega=${taxaEntrega}&totalRecebido=${totalRecebido}`
      }

    return this.http.post('???.???/save', body,{headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  abrirID(usuario: Usuario){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const body = `idUsuario=${usuario.idUsuario}`
    return this.http.post('???.???/prepareNew', body,{headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  getHistorico(usuario: Usuario){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const body = `idCliente=${usuario.idUsuario}`
    return this.http.post('???.???/getPedidosCliente', body,{headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  getHistoricoProduto(id: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    const body = `idPedido=${id}`
    return this.http.post('???.???/pedido', body,{headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  getPagamento(){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.get('???.???/pagamento', {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  deletePagamento(index: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.delete(`???.???/?idPedido=${index}`, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }


  deleteCupom(index: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
     return this.http.delete(`???.???/?idPedido=${index}`, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  deleteHistorico(index: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.delete(`???.???/?idPedido=${index}`, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

  deleteProduto(index: number){
    return this.snackbar.open('Versão apenas para observação!', 'x', {duration: 2000})
    /*
    return this.http.post(`???/???`, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })

     */
  }

}
