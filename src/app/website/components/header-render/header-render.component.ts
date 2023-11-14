import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuHeader } from 'src/app/model/menuHeader.model';

@Component({
  selector: 'app-header-render',
  templateUrl: './header-render.component.html',
  styleUrls: ['./header-render.component.scss'],
})
export class HeaderRenderComponent implements OnInit {
  @Input() dataMenu: Array<MenuHeader> = [];
  @Output('checkMenu') check = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  checkOption(title: string) {
    this.check.emit(title);
  }
}
