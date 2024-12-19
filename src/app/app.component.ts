import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {PokemonService} from './services/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Pokemons';


  constructor(private router:Router) {
  }

  goToList() {
    this.router.navigateByUrl('/list')
  }
}
