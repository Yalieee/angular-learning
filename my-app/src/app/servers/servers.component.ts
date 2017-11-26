import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  inputName = '';
  buttonDisalbed = true;
  serverCreated = false;
  servers = ['Server A', 'Server B'];

  constructor() {
    setTimeout(() => {
      this.buttonDisalbed = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if (0 != this.inputName.trim().length) {
      this.serverCreated = true;
      this.servers.push(this.inputName);
    }
  }

  onInputType(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }

}
