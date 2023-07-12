import { Component } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

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
   
  constructor(
    private authService : AuthService
  ){}

  get currentUser(): User | undefined{
    return this.authService.currentUser;
  }

  logout(){
    this.authService.logout();
  }
}
