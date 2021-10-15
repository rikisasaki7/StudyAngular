import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FourComponent }  from './four.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ FourComponent ],
  bootstrap:    [ FourComponent ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE'}]
})
export class FourModule { }
