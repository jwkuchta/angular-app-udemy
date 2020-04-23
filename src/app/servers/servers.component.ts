import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  // here is an alternative to importing an external html template
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  // serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false
  servers = ['Testserver', 'Testserver2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    // this.serverCreationStatus = `Server ${this.serverName} was created`
  }

  // with two-way binding we no longer need the following method!

  // onUpdateServerName(event: any) {
  //   console.log(event.target.value)
  //   this.serverName = event.target.value
  // }

}
