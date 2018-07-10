import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CsSlidePaneComponent } from './slide-pane/slide-pane.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [CsSlidePaneComponent],
  exports: [CsSlidePaneComponent],
})
export class CsComponentModule {
}
