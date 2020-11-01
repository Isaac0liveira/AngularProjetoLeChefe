import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produto, ProdutoModel} from "../../models/produto.model";
import {SalvarService} from "../../services/salvar.service";
import {HttpClient} from "@angular/common/http";
import {Ng2ImgMaxService} from "ng2-img-max";

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html',
  styleUrls: ['./add-produtos.component.scss']
})
export class AddProdutosComponent implements OnInit {
  nomeProduto: string = '';
  precoProduto: number = 0;
  descrProduto: string = '';
  fotoProduto: FormData;
  subTipo: string = '';
  haveSub: boolean;
  acrescimo: boolean = false;
  dadoEdit: Produto;
  nomeFoto: string;
  tipoFoto: string;
  esgotado: string = '';
  disponibilidade: boolean;
  tamanhoFoto: number;
  uploadedImage: Blob;
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ng2ImgMax: Ng2ImgMaxService, private http: HttpClient, private add: SalvarService, public dialogRef: MatDialogRef<AddProdutosComponent>) { }

  ngOnInit(): void {
    if(this.data.subTipo){
      this.haveSub = true
  }else{
      this.haveSub = false
    }
    if(this.data.tipo == "acrescimo" || this.data.tipo == "sucos"){
      this.acrescimo = true;
      this.fotoProduto = new FormData()
      this.http.get('../../../assets/acrescimo.jpg', { responseType: 'blob' }).subscribe(data =>{
        const file = new File([data], 'acrescimo.jpg', {type: data.type})
        console.log(file)
        this.ng2ImgMax.resizeImage(file, 400,300).subscribe(result =>{
          const resultado = result
          this.ng2ImgMax.compressImage(resultado, 0.005 , true).subscribe(data =>{
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

      })
    }
}

  addFoto(event){
    if(event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.ng2ImgMax.resizeImage(file, 400,300).subscribe(result =>{
        const resultado = result
        this.ng2ImgMax.compressImage(resultado, 0.005 , true).subscribe(data =>{
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

  adicionar(){

  }
}
