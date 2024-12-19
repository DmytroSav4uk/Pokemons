import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urls} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getInitial():Observable<any>{
    return this.http.get(urls.initial)
  }
  getFromApiPath(path:any):Observable<any>{
    return this.http.get(path)
  }
  getByName(name:any):Observable<any>{
    return this.http.get(urls.byName + name)
  }

}
