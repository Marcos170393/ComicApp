import { Component } from '@angular/core';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {

  public publishers = [
    {id:'DC Comincs',desc:'DC - Comics'},
    {id:'Marvel Comincs',desc:'Marvel - Comics'}
  ];

  
}
