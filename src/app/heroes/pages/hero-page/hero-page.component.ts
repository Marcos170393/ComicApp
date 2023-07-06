import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit{

  public hero? : Hero;

  constructor(
    private heroservice: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router : Router
    ){

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroservice.getHeroById(id)),
    )
    .subscribe(hero =>{
      if(!hero){
        return this.router.navigate(['/heroes/list'])
      }

      this.hero = hero;
      return;
    });
    

  }
}
