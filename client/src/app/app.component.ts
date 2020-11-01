import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {LoginService} from "./services/login.service";
import {Usuario} from "./models/usuario.model";
import {SalvarService} from "./services/salvar.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('aparecer', [
      transition('void => *', [
        style({
          display: 'flex',
          opacity: 0,
        }),
        animate('400ms', style({ opacity: 1 })),
        animate(70)
      ]),
      transition('* => void', [
        style({
          opacity: 1,
          zIndex: 1,
        }),
        animate('1000ms', style({ opacity: 0 })),
        animate(100)
      ])
    ])
  ]
})
export class AppComponent {
  usuario: Usuario;
  produto;
  title = 'app';
  carrinhoOpen: boolean;
  backOpen: boolean;
  constructor(private navegador: Router, private login: LoginService,
              public change: ChangeDetectorRef, private get: SalvarService, private snackBar: MatSnackBar) {
  }


  ngOnInit(){
    this.toggleBack(true)
    if((sessionStorage.getItem("carrinho") != null && sessionStorage.getItem("carrinho") != "[]")){
      this.toggle(true)
    }
  }

  manutencao(){
    if(JSON.parse(localStorage.getItem('superusuario')) == null && this.navegador.url != '/inicio'){
      this.snackBar.open("Estamos passando por uma manutenção, logo estaremos de volta!", 'x', {
        duration: 2000,
        panelClass: ['AdmSnackbar'],
      });
      return this.navegador.navigateByUrl('inicio');
    }
  }

  /*
  imprime(){
    this.get.imprimirProduto(this.produto).subscribe();
    const numbers = timer(3000, 1000);
    numbers.subscribe(x => { if(x == 60){
      this.imprime()
    }});
  }
*/
  toggle(state: boolean){
    this.carrinhoOpen = state;
    this.change.detectChanges()
  }

  toggleBack(state: boolean){
    this.backOpen = state;
    this.change.detectChanges()
  }

  goBack(){
    history.back()
  }

  navegar(url: string){
        this.navegador.navigate([`${url}`])
  }
}
