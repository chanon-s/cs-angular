import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { trigger, transition, style, query, animate, state } from '@angular/animations';
import { timer } from 'rxjs';
import { CsTabIndexService } from '../service/tab-index.service';

@Component({
  selector: 'cs-slide-pane',
  templateUrl: './slide-pane.component.html',
  styleUrls: ['./slide-pane.component.sass'],
  animations: [
    trigger('backdrop', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('.2s ease')),
    ]),
    trigger('wrapper', [
      transition('void => *', [
        query('.slide-pane-container.slide-ltr', style({ marginLeft: '-100%', opacity: .5 }), { optional: true }),
        query('.slide-pane-container.slide-rtl', style({ marginLeft: '100%', opacity: .5 }), { optional: true }),

        query('.slide-pane-container', animate('.3s ease', style({ marginLeft: 0, opacity: 1 })), { optional: true })
      ]),
      transition('* => void', [
        query('.slide-pane-container', style({ marginLeft: 0, opacity: 1 }), { optional: true }),

        query('.slide-pane-container.slide-ltr', animate('.2s ease', style({ marginLeft: '-100%', opacity: 0 })), { optional: true }),
        query('.slide-pane-container.slide-rtl', animate('.2s ease', style({ marginLeft: '100%', opacity: 0 })), { optional: true })
      ])
    ]),
  ],
})
export class CsSlidePaneComponent implements OnInit {

  public get ltr() {
    return this.direction === 'ltr';
  }

  public get rtl() {
    return this.direction === 'rtl';
  }

  @Input('max-width')
  public maxWidth: number | string = '400px';
  @Input('label')
  public label: string | number;
  @Input('direction')
  public direction = 'ltr';
  @Input('no-action')
  public noAction = false;
  @Input('height')
  public height: number | string;
  @Input('backdrop')
  public backdrop: boolean;

  @Output('done')
  public onDone: EventEmitter<any> = new EventEmitter();
  @Output('dismiss')
  public onDismiss: EventEmitter<any> = new EventEmitter();

  protected _isOpen: boolean;

  private _tabIndexDisableds = [];

  @Input('open')
  private set _open(value: boolean) {
    if (value && this._isOpen !== value) {
      this.open();
    }
  }

  constructor(
    private _host: ElementRef,
    private _tabIndex: CsTabIndexService
  ) { }

  public ngOnInit() {
  }

  public get isOpen() {
    return this._isOpen;
  }

  public open() {
    this._isOpen = true;
    if (this.backdrop) {
      if (document.activeElement) {
        (document.activeElement as any).blur();
      }
      timer(500)
        .subscribe(() => {
          this._tabIndexDisableds = this._tabIndex
            .disableChildren(document);

          this._tabIndex
            .enableChildren(this._host.nativeElement);
        });
    }
  }

  public done() {
    if (this.onDone.observers.length > 0) {
      this.onDone.emit(this.close.bind(this));
    } else {
      this.close();
    }
  }

  public dismiss() {
    if (this.onDismiss.observers.length > 0) {
      this.onDismiss.emit(this.close.bind(this));
    } else {
      this.close();
    }
  }

  public close() {
    this._isOpen = false;
    this._tabIndex
      .enable.apply(this, this._tabIndexDisableds);
  }

}
