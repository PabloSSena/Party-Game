import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements AfterViewInit {
  @ViewChild('element', {static:false}) element:ElementRef;
  animation: Animation;
  isPlaying = false;

  constructor(private animationCtrl: AnimationController) { }
  
  ngAfterViewInit() {
    this.animation = this.animationCtrl.create('myanimation')
    this.animation.addElement(this.element.nativeElement)
    .duration(800)
    .easing('ease-out')
    .iterations(Infinity)
    .fromTo('transform', 'translateY(0px)', 'translateY(-30px)')
  }

  toogleAnimation() {
    if (this.isPlaying) this.animation.pause()

    else this.animation.play();
    
    this.isPlaying = !this.isPlaying;
  }

  next() {
    
  }
}
