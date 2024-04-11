import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-produto.component.html',
  styleUrl: './tabela-produto.component.css',
})
export class TabelaProdutoComponent implements OnInit{
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao listar produtos:', error);
      }
    );
  }
}
