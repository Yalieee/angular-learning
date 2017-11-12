import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  status = 'online';
  createStatus = 'unavailable';
  inputName = '';

  buttonDisalbed = true;

  constructor() {
    setTimeout(() => {
      this.buttonDisalbed = false;
    }, 2000);
  }

  getStatus() {
    this.status;
  }

  onCreateServer() {
    this.createStatus = 'available';
  }

  onInputType(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }
}
