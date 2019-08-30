import {Component, EventEmitter, Output} from '@angular/core';
import {CommandType} from '../commandType';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public CommandType = CommandType;
  @Output() public commandType: EventEmitter<CommandType> = new EventEmitter<CommandType>();

  public emitValue(commandType: CommandType) {
    this.commandType.emit(commandType);
  }
}
