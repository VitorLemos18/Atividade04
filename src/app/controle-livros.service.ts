// controle-livros.service.ts

import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Certifique-se de importar a classe Livro

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor1'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor3'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor4'] },
    { codigo: 4, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor4'] },
    { codigo: 5, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor4'] },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Encontrar o código mais alto no vetor e incrementar um
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    
    // Atribuir o novo código ao livro
    livro.codigo = novoCodigo;
    
    // Adicionar o livro ao vetor
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex(l => l.codigo === codigo);

    // Remover o livro com splice se encontrado
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
