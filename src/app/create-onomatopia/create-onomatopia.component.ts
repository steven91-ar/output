import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: any = '';
  @Output() newOnomatopiaEvent: EventEmitter<any> = new EventEmitter<any>();

  createOnomatopia(): void {
    this.newOnomatopia.emit('');
  }
}
