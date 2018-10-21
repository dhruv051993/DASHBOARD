import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
 // selector: '[app-servers]',
  // tslint:disable-next-line:component-selector
 // selector: '.app-servers',
  selector: 'app-servers',
 // template: `<app-server></app-server>
 // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  serverCreated = false;
  servers = ['test1' , 'test2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   onCreateServer() {
     this.serverCreated = true;
     this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  ngOnInit() {
  }

}
