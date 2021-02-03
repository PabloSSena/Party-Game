import { Component, OnInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const animation: Animation = createAnimation('')
    .addElement(document.querySelector('.element'))
    .duration(Infinity)
    .fromTo('transform','translateY(0px)','translateY(100px)');
  }

}
