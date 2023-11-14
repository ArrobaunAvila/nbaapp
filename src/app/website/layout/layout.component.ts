import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<p style="margin: 5px;">
        {{today |  date:'short' }}
        </p>
        <app-context-global></app-context-global>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'nba-app';

  public today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
        console.log(`Entro Layout component`);
  }

}
