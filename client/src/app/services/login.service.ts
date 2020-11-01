import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RetornoUsuario} from "../models/retorno.model";
import {Md5} from "ts-md5";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(public http: HttpClient) {}

  headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  postApi(usuario: Usuario): Observable<RetornoUsuario>{
    const md5 = new Md5();
    const senha = md5.appendStr(`${usuario.senha}`).end()
    const body = `usuario=${usuario.usuario}&senha=${senha}`;
    return this.http.post('https://popo.lechefe.com.br/server-0.1/api/login', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(map(data => data as RetornoUsuario));
  }

  getDados(usuario: Usuario): Observable<RetornoUsuario>{
    const body = `celular=${usuario.usuario}`;
    return this.http.post('https://popo.lechefe.com.br/server-0.1/api/cliente/validationData', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(map(data => data as RetornoUsuario));
  }
  postAdmApi(usuario: Usuario): Observable<RetornoUsuario>{
    const md5 = new Md5();
    const senha = md5.appendStr(`${usuario.senha}`).end()
    const body = `usuario=${usuario.usuario}&senha=${senha}`;
    return this.http.post('https://popo.lechefe.com.br/server-0.1/api/login/admLogin', body, {headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(map(data => data as RetornoUsuario));
  }
}
