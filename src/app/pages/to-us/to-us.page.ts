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
      title: "PARABENS POR TER GANHADO, VOCÊ RECEBE UM BEIJO NO PESCOÇO",
      challenge:"SE SEU PARCEIRO(A) NÃO QUISER FAZER ELE(A) TEM QUE BEBER 2 DOSES"
    },
    {
      title: "ESCOLHA UM NUMERO DE 1 ATÉ 5",
      challenge:"SE A OUTRA PESSOA ACERTAR VOCE BEBE UMA DOSE SE ELA ERRAR ELA BEBE UMA DOSE"
    },
    {
      title: "VEJA QUE HORAS SÃO, SE O MINUTO FOR UM NUMERO PAR VOCÊ BEBE SE FOR IMPAR A OUTRA PESSOA BEBE",    
    },
    {
      title: "EU NUNCA COMPREI UMA ROUPA PENSANDO QUE ELA SERIA BOA PRA UM DIA DE PUTARIA",
    },
    {
      title: "EU NUNCA BEIJEI ALGUEM QUE ALGUM AMIGO(A) MEU GOSTAVA",
    },
    {
      title: "VOCES TEM 2 CHANCES UM DE ADIVINHAR A COR DA ROUPA INTIMA DO OUTRO",
      challenge:"QUEM NÃO ACERTAR BEBE UMA DOSE"
    },
    {
      title: "FINJA ESTAR FAZENDO UM BOQUETE NA GARRAFA OU ALGO POR PERTO",
      challenge:"SE NÃO QUISER BEBA 3 DOSES"
    },
    {
      title: "EU NUNCA PENSEI EM USAR UM VIBRADOR NO SEXO",
    },
    {
      title: "VOCÊ QUE ESTA COM O CELULAR NA MÃO DIGA UMA COISA QUE GOSTA QUE SEU PARCEIRO(A) FAZ NO SEXO",
      challenge:"SE NÃO QUISER CONTAR BEBA 1 DOSE"
    },
    {
      title: "CRIE UMA REGRA PRA SER SEGUIDA ATÉ O FINAL DO JOGO",
      challenge:"SE NÃO QUISER CRIAR BEBA 3 DOSES"
    },
    {
      title: "VOCÊ QUE ESTA COM O CELULAR NA MÃO DIGA UMA COISA QUE GOSTA QUE SEU PARCEIRO(A) FAZ NO SEXO",
      challenge:"SE NÃO QUISER CONTAR BEBA 1 DOSE"
    },
    {
      title: "VOCÊ QUE ESTÁ SEGURANDO O CELULAR TEM QUE DAR UM BEIJO NO SEU PARCEIRO(A) COM DIREITO A MORDIDA NO LÁBIO",
      challenge:"SE ALGUM DE VOCÊS NÃO QUISER OS DOIS BEBEM 2 DOSES"
    },
    {
      title: "RETRIBUA O BEIJO QUE VOCÊ GANHOU, JUSTIÇA NESSA CASA",
      challenge:"SE NÃO QUISER RETRIBUIR AMBOS BEBEM 2 DOSES"
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
      title: "DESFAÇA OU CRIE UMA REGRA PRA SER SEGUIDA ATÉ O FINAL DO JOGO"
    },
    {
      title: "OPAAA MAIS BEIJO, DEEM UM BEIJO DE LINGUA POR QUANTO TEMPO QUISEREM",
      challenge:"SE NÃO QUISEREM BEBAM 2 DOSES"
    },
    {
      title: "AMBOS DEVEM DIZER QUAL SUA POSIÇÃO SEXUAL FAVORITA",
      challenge:"SE NÃO QUISER BEBA 3 DOSES"
    },
    {
      title: "HORA DA VINGANÇA, VOCÊ QUE ANTES TEVE QUE TIRAR UMA PEÇA DE ROUPA, AGORA ESCOLHA UMA PEÇA DE ROUPA PRA OUTRA PESSOA TIRAR",
      challenge:"SE NÃO QUISER SÃO 3 DOSES"
    },
    {
      title: "PARABENS VOCÊ GANHA UM BEIJO NA NUCA",
      challenge:"SE VOCÊ OU PARCEIRO(A) NÃO QUISER BEBAM 3 DOSES"
    },
    {
      title: "DIGA UM LUGAR QUE VOCÊ TEM VONTADE DE TRANSAR",
      challenge:"SE NÃO QUISER BEBA 1 DOSE"
    },
    {
      title: "AMBOS DIGAM QUAL PARTE DO CORPO DO PARCEIRO(A) DE VOCÊS TE DA MAIS TESÃO",
      challenge:"SE NÃO QUISEREM BEBAM 1 DOSE"
    },
    {
      title: "EU NUNCA IRIA EM UMA CASA DE TROCA DE CASAIS",
    },
    {
      title: "REVELE UM FETICHE SEU",
      challenge:"SE NÃO QUISER BEBA 1 DOSE"
    },
    {
      title: "SE ESTIVEREM NA RUA E COM ROUPA VÃO DO LADO DE FORA DO CARRO PARA BEIJAR, SE NÃO ESTIVEREM SE BEIJEM AONDE ESTÃO POR NO MINIMO 1 MINUTO",
    },
 
  ]

}
