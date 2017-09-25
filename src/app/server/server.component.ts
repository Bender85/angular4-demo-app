import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  usename = 'DemoApp';
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onChangeName() {
    this.usename = 'changed Name';
  }

  clear() {
    this.usename = '';
    this.counter = 0;
  }
  count() {
    this.counter++;
  }

}
