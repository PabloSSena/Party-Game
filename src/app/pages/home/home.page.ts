import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  features = [
    {
      title: "VERDADE OU DESAFIO",
      icon: "https://i.pinimg.com/474x/18/9d/c1/189dc13caee842c1580fd2133b48d75f.jpg"
    },
    {
      title: "VERDADE OU DESAFIO PICANTE",
      icon: "https://st.depositphotos.com/1000345/2217/v/600/depositphotos_22170357-stock-illustration-pepper-in-open-mouth.jpg"
    } 
  ]
}
