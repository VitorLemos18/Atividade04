import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ControleEditoraService } from '../app/controle-editora.service';
import { ControleLivrosService } from '../app/controle-livros.service';
import { LivroListaComponent } from '../app/livro-lista/livro-lista.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
