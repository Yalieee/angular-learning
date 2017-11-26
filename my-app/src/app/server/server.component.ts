import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  inputName = '';
  buttonDisalbed = true;
  serverCreated = false;
  serverStatus = 'offline';

  constructor() {
    setTimeout(() => {
      this.buttonDisalbed = false;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    if (0 != this.inputName.trim().length) {
      this.serverCreated = true;
    }
  }

  onInputType(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
