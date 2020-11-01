import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor(private router: Router,  private root: AppComponent) { }

  ngOnInit(): void {
    this.root.ngOnInit()
    this.root.toggleBack(false)
  }

  navigate(url: string): void{
    this.router.navigateByUrl(`/${url}`);
  }
}
