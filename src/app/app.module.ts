import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { MenuComponent } from './text-editor/menu/menu.component';
import { TextAreaComponent } from './text-editor/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    MenuComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
