import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProdutosFastfoodComponent} from "../produtos-fastfood/produtos-fastfood.component";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-dialog-historico',
  templateUrl: './dialog-historico.component.html',
  styleUrls: ['../carrinho/carrinho.component.scss']
})
export class DialogHistoricoComponent implements OnInit {
  produto;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.produto = this.data.produto
  }

  try(texto){
    const base64Image = `data:image/png;base64, ${texto}`
    const retorno = this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
    return retorno
  }
}
