import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-context-global',
  templateUrl: './context-global.component.html',
  styleUrls: ['./context-global.component.scss']
})
export class ContextGlobalComponent implements OnInit {

  public title: string = "nba emotion";
  constructor() { }

  ngOnInit(): void {
  }

}
