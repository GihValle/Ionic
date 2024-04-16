import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  public actionSheetButtons = [
    {
      text: 'Remover',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartilhar',
      icon: 'share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Editar',
      icon: 'pencil',
      data: {
        action: 'edit',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      icon: 'close',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
