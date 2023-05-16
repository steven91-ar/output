import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opoma';
   onomatopoeiaList: string = '';

  onReceiveNewOnomatopia(event: any): void {
    console.log(event);
    this.onomatopoeiaList = event;
  }
}
