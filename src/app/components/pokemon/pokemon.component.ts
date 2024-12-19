import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon/pokemon.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [
    NgStyle
  ],
  templateUrl: './pokemon.component.html',
  standalone: true,
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  stats: any
  abilities:any
  maxStatValue = 100;
  filteredStats:any;

  constructor(private router: Router, private pokeService: PokemonService) {}

  ngOnInit() {
    this.getByName()
  }

  getByName() {
    const pokemonName = this.router.url.substring(this.router.url.indexOf("/pokemon/") + 9);


    this.pokeService.getByName(pokemonName).subscribe((res) => {
      this.pokemon = res;
      this.stats = res.stats
      this.abilities = res.abilities

      this.filteredStats = this.stats.filter( (stat:any) =>
        ['hp', 'attack', 'defense', 'speed'].includes(stat.stat.name)
      );

    })
  }

  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;

  playAudio() {
    const audio = this.audioElement.nativeElement;
    audio.load(); // Ensure the audio is loaded
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  }

  getBarWidth(baseStat: number): number {
    return (baseStat / this.maxStatValue) * 100; // Convert stat value to a percentage
  }

  getStatColor(statName: string): string {
    switch (statName) {
      case 'hp':
        return '#ff4c4c';
      case 'attack':
        return '#ff9900';
      case 'defense':
        return '#0099ff';
      case 'speed':
        return '#ffcc00';
      default:
        return '#ccc';
    }
  }
}
