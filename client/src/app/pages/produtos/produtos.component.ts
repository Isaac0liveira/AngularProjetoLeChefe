import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {SalvarService} from "../../services/salvar.service";
import {SpinnerService} from "../../services/spinner.service";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import {timer} from "rxjs";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  adm: boolean = false;
  faBreadSlice = faBreadSlice
  faHamburger = faHamburger
  produto;
  constructor(private router: Router, public spinner: SpinnerService, private get: SalvarService, private root: AppComponent) { }

  ngOnInit(): void {
    this.root.ngOnInit()
    if(sessionStorage.getItem("produtos000") == null) {
      console.log("Vazio")
      this.getProduto()
    }
    if(JSON.parse(localStorage.getItem('superusuario')) != null){
      this.adm = true
    }
  }

  getProduto(){

  }

  navigateProdutos(pagina: string) {
    this.router.navigate([`/produtos/${pagina}`])
  }
}
