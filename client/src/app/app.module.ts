import { HighlightDirective } from './compartilhado/directives/highlight.directive';
import { HeaderComponent } from './compartilhado/header/header.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogLoginComponent } from './pages/dialog-login/dialog-login.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutosBebidasComponent } from './pages/produtos-bebidas/produtos-bebidas.component';
import { ProdutosFastfoodComponent } from './pages/produtos-fastfood/produtos-fastfood.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroTokenComponent } from './pages/cadastro-token/cadastro-token.component';
import { CadastroDadosComponent } from './pages/cadastro-dados/cadastro-dados.component';
import { RecuperarSenhaTokenComponent } from './pages/recuperar-senha-token/recuperar-senha-token.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { MenuPerfilComponent } from './pages/menu-perfil/menu-perfil.component';
import { ProdutosPastelComponent } from './pages/produtos-pastel/produtos-pastel.component';
import { ProdutosPizzasComponent } from './pages/produtos-pizzas/produtos-pizzas.component';
import { ProdutosBatataComponent } from './pages/produtos-batata/produtos-batata.component';
import { ProdutosSucosComponent } from './pages/produtos-sucos/produtos-sucos.component';
import { ProdutosAcrescimoComponent } from './pages/produtos-acrescimo/produtos-acrescimo.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { MenuHistoricoComponent } from './pages/menu-historico/menu-historico.component';
import { DialogHistoricoComponent } from './pages/dialog-historico/dialog-historico.component';
import { DialogCheckoutComponent } from './pages/dialog-checkout/dialog-checkout.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DialogAdmProdutosComponent } from './pages/dialog-adm-produtos/dialog-adm-produtos.component';
import { AddProdutosComponent } from './pages/add-produtos/add-produtos.component';
import { DialogTokenComponent } from './pages/dialog-token/dialog-token.component';
import { DialogInfoComponent } from './pages/dialog-info/dialog-info.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { SpinnerComponent } from './compartilhado/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CadastroRespostaComponent } from './pages/cadastro-resposta/cadastro-resposta.component';
import { RecuperarPalavraComponent } from './pages/recuperar-palavra/recuperar-palavra.component';
import { ProdutosComboComponent } from './pages/produtos-combo/produtos-combo.component';
import { DialogAcrescimoComponent } from './pages/dialog-acrescimo/dialog-acrescimo.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () =>import('./pages/inicio/inicio.module').then(m => m.InicioModule)},
  { path: 'produtos', loadChildren: () =>import('./pages/produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: 'produtos/bebidas', loadChildren: () =>import('./pages/produtos-bebidas/produtos-bebidas.module').then(m => m.ProdutosBebidasModule)},
  { path: 'produtos/combos', loadChildren: () =>import('./pages/produtos-combo/produtos-combo.module').then(m => m.ProdutosComboModule)},
  { path: 'produtos/pastel', loadChildren: () =>import('./pages/produtos-pastel/produtos-pastel.module').then(m => m.ProdutosPastelModule)},
  { path: 'produtos/sucos', loadChildren: () =>import('./pages/produtos-sucos/produtos-sucos.module').then(m => m.ProdutosSucosModule)},
  { path: 'produtos/acrescimo', loadChildren: () =>import('./pages/produtos-acrescimo/produtos-acrescimo.module').then(m => m.ProdutosAcrescimoModule)},
  { path: 'produtos/minipizzas', loadChildren: () =>import('./pages/produtos-pizzas/produtos-pizzas.module').then(m => m.ProdutosPizzasModule)},
  { path: 'produtos/batata', loadChildren: () =>import('./pages/produtos-batata/produtos-batata.module').then(m => m.ProdutosBatataModule)},
  { path: 'produtos/sanduiches', loadChildren: () =>import('./pages/produtos-fastfood/produtos-fastfood.module').then(m => m.ProdutosFastfoodModule)},
  { path: 'cadastro', loadChildren: () =>import('./pages/cadastro-dados/cadastro-dados.module').then(m => m.CadastroDadosModule)},
  { path: 'cadastro/palavra', loadChildren: () =>import('./pages/cadastro-resposta/cadastro-resposta.module').then(m => m.CadastroRespostaModule)},
  { path: 'inicio/perfil', loadChildren: () =>import('./pages/menu-perfil/menu-perfil.module').then(m => m.MenuPerfilModule)},
  { path: 'inicio/historico', loadChildren: () =>import('./pages/menu-historico/menu-historico.module').then(m => m.MenuHistoricoModule)},
  { path: 'carrinho', loadChildren: () =>import('./pages/carrinho/carrinho.module').then(m => m.CarrinhoModule)},
];

@NgModule({
  entryComponents: [DialogLoginComponent],
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    HighlightDirective,
    DialogLoginComponent,
    ProdutosComponent,
    ProdutosBebidasComponent,
    ProdutosFastfoodComponent,
    CadastroComponent,
    CadastroTokenComponent,
    CadastroDadosComponent,
    RecuperarSenhaTokenComponent,
    RecuperarSenhaComponent,
    MenuPerfilComponent,
    ProdutosPastelComponent,
    ProdutosPizzasComponent,
    ProdutosBatataComponent,
    ProdutosSucosComponent,
    ProdutosAcrescimoComponent,
    CarrinhoComponent,
    MenuHistoricoComponent,
    DialogHistoricoComponent,
    DialogCheckoutComponent,
    DialogAdmProdutosComponent,
    AddProdutosComponent,
    DialogTokenComponent,
    DialogInfoComponent,
    SpinnerComponent,
    CadastroRespostaComponent,
    RecuperarPalavraComponent,
    ProdutosComboComponent,
    DialogAcrescimoComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatDialogModule,
        MatInputModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        RouterModule.forRoot(routes),
        MatCardModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatIconModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        Ng2ImgMaxModule,
        MatProgressSpinnerModule,
    ],
  providers: [HeaderComponent, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
