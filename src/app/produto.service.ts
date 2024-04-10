import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  // Método para listar todos os produtos
  listarProdutos(): Observable<Produto[]> {
    return this.http
      .get<{ message: string; data: Produto[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }

  // Método para adicionar um novo produto
  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  //  // Método para atualizar um produto existente
  //  atualizarProduto(produto: Produto): Observable<Produto> {
  //     return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  //  }

  //  // Método para excluir um produto
  //  excluirProduto(id: number): Observable<any> {
  //     return this.http.delete(`${this.apiUrl}/${id}`);
  //  }
}
