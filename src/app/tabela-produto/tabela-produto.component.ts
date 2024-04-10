import { Component } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-produto.component.html',
  styleUrl: './tabela-produto.component.css'
})
export class TabelaProdutoComponent {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.listarProdutos();
  }

}
