import { DialogLoginComponent } from './../../pages/dialog-login/dialog-login.component';
import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  logged;
  usuario;
  compraId: number;
  backOpen: boolean;
  superuser: boolean = false;
  constructor(public dialog: MatDialog, private snackbar: MatSnackBar,
              public navegador: Router, private change: ChangeDetectorRef) {
    }
  sentence: string;
  ngOnInit(): void {
    if(localStorage.getItem("usuario") != null){
      this.logged = JSON.parse(localStorage.getItem("usuario")).logged
      this.usuario = JSON.parse(localStorage.getItem("usuario")).nome
    }else if(localStorage.getItem("superusuario") != null){
      this.superuser = true;
      this.logged = true;
      this.usuario = "Administrador";
    }else{
      this.logged = null;
      this.usuario = null;
    }
  }
  isSticky: boolean = false;
  overlay() {
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  subsDialog() {
    const dialogRef = this.dialog.open(DialogLoginComponent, {panelClass: ['animated', 'fadeInUp']});
    return dialogRef.afterClosed()
  }

  openDialog() {
    this.subsDialog().subscribe(data =>{
      if(data != undefined) {
        if (data.update == true) {
          this.ngOnInit()
          this.navegador.navigateByUrl('inicio')
        }
      }
    })
  }

  goTo(string: string){
    this.navegador.navigateByUrl(string)
  }

  quit(){
    localStorage.removeItem('usuario')
    if(localStorage.getItem('superusuario') != null || localStorage.getItem('superusuario') != "[]"){
      localStorage.removeItem('superusuario')
    }
    sessionStorage.clear()
    this.snackbar.open("Aguardamos seu Retorno!", 'x', {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "end",
      panelClass: ['snackbar'],
    });
    this.ngOnInit()
    this.navegador.navigateByUrl('inicio')
  }

  navigateProdutos(url: string): void {
    this.navegador.navigateByUrl(`/${url}`)
  }
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
}
