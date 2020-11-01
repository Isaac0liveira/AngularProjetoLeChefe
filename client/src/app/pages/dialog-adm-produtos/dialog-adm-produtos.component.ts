import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produto, ProdutoModel} from "../../models/produto.model";
import {SalvarService} from "../../services/salvar.service";
import {HttpClient} from "@angular/common/http";
import {Ng2ImgMaxService} from "ng2-img-max";

@Component({
  selector: 'app-dialog-adm-produtos',
  templateUrl: './dialog-adm-produtos.component.html',
  styleUrls: ['./dialog-adm-produtos.component.scss']
})
export class DialogAdmProdutosComponent implements OnInit {
  dados;
  default;
  nomeProduto: string = '';
  precoProduto: number = 0;
  descrProduto: string = '';
  fotoProduto: FormData;
  subTipo: string = '';
  haveSub: boolean;
  acrescimo: boolean = false;
  dadoEdit: Produto;
  uploadedImage: Blob;
  nomeFoto: string;
  tipoFoto: string;
  tamanhoFoto: number;
  esgotado: string = '';
  disponibilidade: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private ng2ImgMax: Ng2ImgMaxService, public dialogRef: MatDialogRef<DialogAdmProdutosComponent>, private editar: SalvarService, private image: HttpClient) { }

  ngOnInit(): void {
    this.dados = this.data;
    console.log(this.dados)
    this.nomeProduto = this.data.produtoNome;
    this.precoProduto = this.data.produtoPreco;
    if(this.data.observacao != "null") {
      this.descrProduto = this.data.observacao
    }else{
      this.descrProduto = ''
    }
    if(this.data.haveSub){
      this.haveSub = true;
      this.subTipo = this.data.subTipo
    }else{
      this.haveSub = false;
    }
    this.disponibilidade = this.data.esgotado
    if(this.disponibilidade == true){
      this.esgotado = "true"
    }else{
      this.esgotado = "false"
    }
    if(this.data.tipo == "acrescimo"){
      this.acrescimo = true;
      this.fotoProduto = new FormData()
      this.http.get('../../../assets/acrescimo.jpg', { responseType: 'blob' }).subscribe(data =>{
        this.nomeFoto = 'acrescimo.jpg';
        this.tipoFoto = data.type;
        this.tamanhoFoto = data.size;
        const file = new File([data], 'acrescimo.jpg')
        this.fotoProduto = new FormData()
        this.fotoProduto.append('file', file)
      })
    }
  }

  addFoto(event){
    if(event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.ng2ImgMax.resizeImage(file, 400,300).subscribe(result =>{
        const resultado = result
        this.ng2ImgMax.compressImage(resultado, 0.005).subscribe(data =>{
          this.uploadedImage = data;
          //@ts-ignore
          const {name, type, size} = this.uploadedImage
          this.nomeFoto = name;
          this.tipoFoto = type;
          this.tamanhoFoto = size;
          this.fotoProduto = new FormData()
          this.fotoProduto.append('file', this.uploadedImage)
        })
      })
    }
  }

  getImageDefault(arquivo){
      const imageBlob = this.dataURItoBlob(arquivo);
      //@ts-ignore
      const imageFile = new File([imageBlob], this.dados.produtoFoto.nome, { type: 'image/png' });
      return imageFile
  }

  dataURItoBlob(dataURI) {
    const url = dataURI.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    const byteString = window.atob(url);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  edit(){
  }
}
