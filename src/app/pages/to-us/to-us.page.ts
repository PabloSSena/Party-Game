import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-us',
  templateUrl: './to-us.page.html',
  styleUrls: ['./to-us.page.scss'],
})
export class ToUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const teste = (num) => Math.floor(Math.random() * num);
    console.log(teste(10));
    return teste;
  }

  random() {
    const teste = (num) => Math.floor(Math.random() * num);
    console.log(teste(10));
    return teste;
  }

  features = [ 
    {
      title: "PRA COMEÇAR OS DOIS BEBEM 2 DOSES E FAZEM JO-KEN-PO PRA VER QUEM SERA O PRIMEIRO A LER OS DESAFIOS",
    },
    {
      title: "",
      challenge:"SE NÃO QUISER FAZER BEBA 3 DOSES"
    },
    {
      title: "FECHE OS OLHOS POR 1 MINUTO E DEIXE O OUTRO FAZER O QUE QUISER",
      challenge:"SE NÃO QUISER FAZER BEBA 3 DOSES"
    },
    {
      title: "DEIXE DAREM UM TAPA NA SUA BUNDA",
      challenge:"SE NÃO QUISER BEBA 1 DOSE"
    },
    {
      title: "ESCOLHA UMA PEÇA DE ROUPA DA OUTRA PESSOA PRA ELA TIRAR",
      challenge:"SE ELA NÃO QUISER TEM QUE BEBER 3 DOSES"
    },
    {
      title: "CRIE UMA REGRA PRA SER SEGUIDA ATÉ O FINAL DO JOGO"
    },
    {
      title: "DESFAÇA OU CRIE UMA REGRA PRA SER SEGUIDA ATÉ O FINAL DO JOGO"
    },
    {
      title: "FINJA ESTAR FAZENDO UM BOQUETE NA GARRAFA OU ALGO POR PERTO",
      challenge:"SE NÃO QUISER BEBA 3 DOSES"
    },
    {
      title: "AMBOS DEVEM DIZER QUAL SUA POSIÇÃO SEXUAL FAVORITA",
      challenge:"SE NÃO QUISER BEBA 3 DOSES"
    },
    {
      title: "SE ESTIVEREM NA RUA E COM ROUPA VÃO DO LADO DE FORA DO CARRO PARA BEIJAR, SE NÃO ESTIVEREM SE BEIJEM AONDE ESTÃO POR NO MINIMO 1 MINUTO",
    },
 

  ]

}
