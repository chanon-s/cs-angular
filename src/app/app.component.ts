import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { CsSlidePaneComponent } from 'cs-component';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @ViewChild('pane')
  pane: CsSlidePaneComponent;

  constructor() { }

  ngOnInit() {
    timer(2000)
      .subscribe(() => {
        this.pane.open();
      });
  }

}
