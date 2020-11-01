import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-checkout',
  templateUrl: './dialog-checkout.component.html',
  styleUrls: ['./dialog-checkout.component.scss']
})
export class DialogCheckoutComponent implements OnInit {
  metodoPagamento: string;
  cartaoTipo: string;
  pedidoTipo: string;
  bairro: string;
  rua: string;
  ruaValidate = new FormControl('',
    [Validators.required,
      Validators.pattern("^[A-Z Á-Ú á-ú a-z 0-9]*$"), Validators.minLength(4)]);
  complemento: string;
  trigger: boolean;
  triggerOptions: boolean;
  triggerBairro: boolean;
  triggerConfirma: boolean = false;
  precoEntrega: number = 0;
  quantiaCliente: number;
  precoProduto: number;
  constructor( public dialogRef: MatDialogRef<DialogCheckoutComponent>, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.precoProduto = this.data.precoProduto
    console.log(this.data)
  }

  escolha(){
    this.trigger = true
  }

  escolhaBairro(){
    if(this.bairro == "residencial1" || this.bairro == "residencial2"){
      this.precoEntrega = 2
    }else if(this.bairro == "jardinsdaserra" || this.bairro == "luzardoviana" || this.bairro == "maracanazinho" || this.bairro == "piratininga" || this.bairro == "novo"){
      this.precoEntrega = 3
    }else if(this.bairro == "mucuna"){
      this.precoEntrega = 4
    }else if(this.bairro == "jereissati1" || this.bairro == "jereissati2" || this.bairro == "timbo" || this.bairro == "lagoaparque"){
      this.precoEntrega = 5
    }else if(this.bairro == "acaracuzinho"){
      this.precoEntrega = 7
    }
  }


  checkBairro(bairro){
    let valor
    if(bairro == "residencial1" || bairro == "residencial2"){
      valor = 2
    }else if(bairro == "jardinsdaserra" || bairro == "luzardoviana" || bairro == "maracanazinho" || bairro == "piratininga" || bairro == "novo"){
      valor = 3
    }else if(bairro == "mucuna"){
      valor = 4
    }else if(bairro == "jereissati1" || bairro == "jereissati2" || bairro == "timbo" || bairro == "lagoaparque"){
      valor = 5
    }else if(bairro == "acaracuzinho"){
      valor = 7
    }
    return valor
  }

  enderecoSelection(boolean){
    if(boolean){
      this.triggerBairro = true
      this.triggerOptions = false;
    }else{
      this.bairro = this.data.cliente.bairro
      this.escolhaBairro()
      if(this.quantiaCliente < (this.precoEntrega + this.precoProduto) && this.metodoPagamento != 'cartao'){
        this.triggerOptions = true;
        this.snackBar.open("A quantia não é suficiente! Verifique se tem como pagar o produto ou cheque a tabela de preços de entrega!", 'x', {
          duration: 2000,
          panelClass: ['AdmSnackbar'],
        });
      }else {
        this.close()
      }
    }
  }

  reset(){
    this.cartaoTipo = '';
    this.pedidoTipo = '';
    this.trigger = false
    this.triggerOptions = false;
    this.triggerBairro = false;
    this.triggerConfirma = false;
    this.precoEntrega = 0;
    this.quantiaCliente = 0;
  }

  pedidoSelect(){
    if(this.pedidoTipo == "Retirada"){
      this.triggerConfirma = true;
      this.triggerOptions = false;
      this.triggerBairro = false;
      this.precoEntrega = 0;
    }else{
      this.triggerConfirma = false;
      this.triggerOptions = true;
      this.triggerBairro = false;
    }
  }

  checkQuantia(){
    if(this.quantiaCliente == null || this.quantiaCliente < 0){
      this.quantiaCliente = 0
    }
  }

  close(): void{
    let retorno;
    if(this.metodoPagamento == "dinheiro"){
      if(this.quantiaCliente >= (this.precoProduto + this.precoEntrega)) {
        if(this.pedidoTipo == "Retirada"){
          retorno = {
            precoEntrega: this.precoEntrega,
            quantiaCliente: this.quantiaCliente,
            metodoPagamento: this.metodoPagamento,
            isDelivery: false
          }
          this.dialogRef.close(retorno)
        }else {
          if (this.bairro != null && this.rua != null) {
            retorno = {
              precoEntrega: this.precoEntrega,
              quantiaCliente: this.quantiaCliente,
              metodoPagamento: this.metodoPagamento,
              bairro: this.bairro,
              rua: `${this.rua} (${this.complemento})`,
              isDelivery: true
            }
            this.dialogRef.close(retorno)
          } else {
            this.bairro = this.data.cliente.bairro
            this.escolhaBairro()
            retorno = {
              precoEntrega: this.precoEntrega,
              quantiaCliente: this.quantiaCliente,
              metodoPagamento: this.metodoPagamento,
              bairro: this.bairro,
              rua: `${this.data.cliente.rua} (${this.data.cliente.complemento})`,
              isDelivery: true
            }
            this.dialogRef.close(retorno)
          }
        }
      }else{
        this.snackBar.open("A quantia não é suficiente! Verifique se tem como pagar o produto ou cheque a tabela de preços de entrega!", 'x', {
          duration: 2000,
          panelClass: ['AdmSnackbar'],
        });
      }
    }else if(this.metodoPagamento == "cartao"){
      if(this.pedidoTipo == "Retirada"){
        retorno = {precoEntrega: this.precoEntrega, metodoPagamento: this.metodoPagamento, cartaoTipo: this.cartaoTipo, isDelivery: false}
        this.dialogRef.close(retorno)
      }else{
          if(this.bairro != null && this.rua != null){
            retorno = {precoEntrega: this.precoEntrega,metodoPagamento: this.metodoPagamento, cartaoTipo: this.cartaoTipo, bairro: this.bairro, rua: `${this.rua} (${this.complemento})` , isDelivery: true}
            this.dialogRef.close(retorno)
          }else{
            this.bairro = this.data.cliente.bairro
            this.escolhaBairro()
            retorno = {
                precoEntrega: this.precoEntrega,
                metodoPagamento: this.metodoPagamento,
                cartaoTipo: this.cartaoTipo,
                bairro: this.bairro,
                rua: `${this.data.cliente.rua} (${this.data.cliente.complemento})`,
                isDelivery: true,
        }
        this.dialogRef.close(retorno)
      }
      }
    }else{
        console.log("erro")
      }

  }

}
