import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  status = 'online';

  buttonDisalbed = true;

  constructor() {
    setTimeout(() => {
      this.buttonDisalbed = false;
    }, 2000);
  }

  getStatus() {
    return this.status;
  }
}
