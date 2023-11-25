
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';


@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(); // Instanciação via construtor padrão da classe Livro
  autoresForm: string = ''; // Inicialização vazia
  editoras: Array<Editora> = []; // Inicialização com vetor vazio

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Preencher o vetor editoras
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    // Preencher o atributo autores do livro com o valor de autoresForm
    this.livro.autores = this.autoresForm.split('\n');

    // Invocar o método incluir de servLivros, com a passagem do livro no parâmetro
    this.servLivros.incluir(this.livro);

    // Navegar para a rota "/lista"
    this.router.navigateByUrl('/lista');
  };
}
