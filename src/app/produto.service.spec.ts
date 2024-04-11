import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProdutoService } from './produto.service';
import { Produto } from './produto.service'; 

describe('ProdutoService', () => {
 let service: ProdutoService;
 let httpMock: HttpTestingController;

 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o HttpClientTestingModule para simular requisições HTTP
      providers: [ProdutoService]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController); // Injeta o HttpTestingController para interceptar e simular respostas HTTP
 });

 afterEach(() => {
    httpMock.verify(); // Verifica se todas as requisições esperadas foram feitas
 });

 it('should be created', () => {
    expect(service).toBeTruthy();
 });

 it('should list products', () => {
    const dummyProdutos: Produto[] = [
      { id: 1, nome: 'Produto 1', preco: 100 },
      { id: 2, nome: 'Produto 2', preco: 200 }
    ];

    service.listarProdutos().subscribe(produtos => {
      expect(produtos.length).toBe(2);
      expect(produtos).toEqual(dummyProdutos);
    });

    const req = httpMock.expectOne('http://localhost:3000/produtos'); // Espera uma requisição para a URL especificada
    expect(req.request.method).toBe('GET');
    req.flush(dummyProdutos); // Simula uma resposta com os produtos dummy
 });

 // Aqui você pode adicionar testes para os outros métodos do serviço
});

