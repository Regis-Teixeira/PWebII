import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 123;
  precoProduto: number = 2.59;

  constructor() {
    //this.anuncio = `O ` + this.nomeProduto + ` está em promoção! `;
  }

  ngOnInit(): void {
  }

}
