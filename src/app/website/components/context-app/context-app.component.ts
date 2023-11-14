import { Component, OnInit } from '@angular/core';
import { MenuHeader } from 'src/app/model/menuHeader.model';
import { DinamicServicesService } from 'src/app/services/dinamic-services.service';

@Component({
  selector: 'app-context-app',
  templateUrl: './context-app.component.html',
  styleUrls: ['./context-app.component.scss']
})
export class ContextAppComponent implements OnInit {

  public menuHeader: Array<MenuHeader> = [];

  constructor(private service : DinamicServicesService) {
    this.menuHeader = this.service.getMenuHeader();
  }

  ngOnInit(): void {

  }

  getMenuRender( dato:string ){
   console.log(dato);
  }



}
