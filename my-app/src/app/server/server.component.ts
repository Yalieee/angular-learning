import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  status = 'online';
  createStatus = 'unavailable';

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
}
