import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  inputName = '';
  buttonDisalbed = true;
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.buttonDisalbed = false;
    }, 2000);
  }

  onCreateServer() {
    if (0 != this.inputName.trim().length) {
      this.serverCreated = true;
    }
  }

  onInputType(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }
}
