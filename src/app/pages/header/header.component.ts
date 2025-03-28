import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output()
  headerOption = new EventEmitter<string>();


  sendScroll(value: string) {
    this.headerOption.emit(value);
  }
}
