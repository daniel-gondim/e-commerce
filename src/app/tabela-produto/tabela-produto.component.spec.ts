import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProdutoComponent } from './tabela-produto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TabelaProdutoComponent', () => {
  let component: TabelaProdutoComponent;
  let fixture: ComponentFixture<TabelaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaProdutoComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
