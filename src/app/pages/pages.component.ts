import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-layout>
    <router-outlet>
    </router-outlet>
    </app-layout>`,
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
