import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit{
  
  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property is required');
  }

  @Input()
  public hero!:Hero;


}
