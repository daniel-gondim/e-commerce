import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { TabelaProdutoComponent } from './tabela-produto/tabela-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [FormsModule,BrowserModule, CadastroProdutoComponent, TabelaProdutoComponent]
})
export class AppModule {}
