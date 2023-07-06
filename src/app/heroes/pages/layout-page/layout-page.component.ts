import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sideBarItem = [ 
    {
      label:'List',icon:'label',url:'./list'
    },
    {
      label:'Create',icon:'add',url:'./new-hero'
    },
    {
      label:'Search',icon:'search',url:'./search'
    }
   ]
}
