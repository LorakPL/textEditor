import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @ViewChild('textBox', {static: true}) textBox: ElementRef;

  public saveData() {
    console.log(this.textBox.nativeElement);
  }

}
