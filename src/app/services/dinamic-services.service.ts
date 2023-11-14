import { Injectable } from '@angular/core';
import { MenuHeader } from '../model/menuHeader.model';

@Injectable({
  providedIn: 'root'
})
export class DinamicServicesService {

  dataMenu: MenuHeader[] = [];

  constructor() { }

  getMenuHeader(){
  return  this.dataMenu = [{
      'title': 'team',
      'route': 'team',
      'description':'views to visualize teams nba'
    },
    {
      'title': 'player',
      'route': 'player',
      'description':'views to visualize players starts nba'
    },
    {
      'title': 'schedule',
      'route': 'schedule',
      'description':'views to visualize schedule nba'
    },
    {
      'title': 'support',
      'route': 'support',
      'description':'views to visualize schedule nba'
    }]
  };
}
