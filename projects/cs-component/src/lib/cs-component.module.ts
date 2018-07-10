import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CsSlidePaneComponent } from './cs-slide-pane/cs-slide-pane.component';
import { CommonModule } from '@angular/common';
import { CsToggleSwitchComponent } from './cs-toggle-switch/cs-toggle-switch.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CsSlidePaneComponent,
    CsToggleSwitchComponent
  ],
  exports: [
    CsSlidePaneComponent,
    CsToggleSwitchComponent
  ],
})
export class CsComponentModule {
}
