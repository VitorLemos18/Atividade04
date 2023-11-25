// controle-editora.service.ts

import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Certifique-se de importar a classe Editora

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.find((editora) => editora.codEditora === codEditora);

    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      return 'Editora não encontrada';
    }
  }
}
