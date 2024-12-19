import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon/pokemon.service';
import {MatTableModule, MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatButton,MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMiniFabButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [MatMiniFabButton, MatIcon, MatTableModule, MatTable, MatPaginator, MatButton, MatButtonModule, MatLabel, MatFormField, MatInput, FormsModule],
  templateUrl: './list.component.html',
  standalone: true,
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  displayedColumns: string[] = ['name','button'];

  constructor(private pokeService:PokemonService, private router:Router) {
  }

  ngOnInit() {
    this.getPokemons()
  }

  pokemons:any

  getPokemons(){
    this.pokeService.getInitial().subscribe((res)=>{
      this.pokemons = res
      console.log(this.pokemons)
    })
  }


  getWithPath(next:boolean){

    if (next){
      this.getWithPath2(this.pokemons.next)
    }else {
      this.getWithPath2(this.pokemons.previous)
    }




  }

  getWithPath2(path:any){
    this.pokeService.getFromApiPath(path).subscribe((res)=>{
      this.pokemons = res
    })
  }


  search(searchForm: NgForm) {
  this.pokeService.getByName(searchForm.value.pokemon).subscribe(()=>{
    this.router.navigateByUrl(`/pokemon/${searchForm.value.pokemon}`)
  })
  }


  openPokemon(pokemon: any) {
    this.router.navigateByUrl(`/pokemon/${pokemon}`)
  }
}
