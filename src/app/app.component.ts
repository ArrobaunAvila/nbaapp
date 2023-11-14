import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nba-app';

  public today: Date = new Date();

  ngOnInit(): void {
      console.log('Entrando component AppComponent');
  }
}
