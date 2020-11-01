import {Form} from "@angular/forms";

export interface Produto{
  contagem?: number;
  arquivo: string;
  fotoProduto: any;
  nome: string;
  preco: number;
  quantidade: number;
  id: number;
  idPedido: number;
  idArquivo: number;
  observacao: string;
  tipo: string;
  subTipo: string;
  bairro: string;
  endereco: string;
  isDelivery: boolean;
  esgotado: boolean;
}

export class ProdutoModel{
  arquivo: string;
  fotoProduto: any;
  nome: string;
  preco: number;
  quantidade: number;
  id: number;
  idPedido: number;
  idArquivo: number;
  observacao: string;
  tipo: string;
  subTipo: string;
  bairro: string;
  endereco: string;
  isDelivery: boolean;
  esgotado: boolean;
}
