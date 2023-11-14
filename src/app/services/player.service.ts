import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }


  getAllPlayers(){
    this.http.get<Array<Player>>('https://www.balldontlie.io/api/v1/players');
  }

}
