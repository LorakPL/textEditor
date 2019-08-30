import {Component} from '@angular/core';
import {CommandType} from './commandType';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {

  public transformText(value: CommandType) {
    if (value === CommandType.LINK) {
      const linkURL = prompt('Proszę podać URL:', 'http://');
      document.execCommand(value, true, linkURL);
    } else {
      document.execCommand(value, false, null);
    }
  }

}
