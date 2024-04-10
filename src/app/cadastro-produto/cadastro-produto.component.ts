import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  id = 0;
  nome = '';
  preco = 0;

  constructor(private produtoService: ProdutoService) { }

  adicionarProduto() {
    this.produtoService.adicionarProduto({ id: this.id, nome: this.nome, preco: this.preco });
    this.id =  0;
    this.nome = '';
    this.preco = 0;
  }

}
