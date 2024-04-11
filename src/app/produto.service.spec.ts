import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProdutoService } from './produto.service';
import { Produto } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService],
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve criar o serviço ProdutoService', () => {
    expect(service).toBeTruthy();
  });

  it('deve listar todos os produtos', () => {
    const dummyProdutos: Produto[] = [
      { id: 1, nome: 'Produto 1', preco: 100 },
      { id: 2, nome: 'Produto 2', preco: 200 },
    ];

    service.listarProdutos().subscribe((produtos) => {
      expect(produtos.length).toBe(2);
      expect(produtos).toEqual(dummyProdutos);
    });

    const req = httpMock.expectOne('http://localhost:3000/produtos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProdutos);
  });
});
