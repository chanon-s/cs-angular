import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cs-toggle-switch',
  templateUrl: './cs-toggle-switch.component.html',
  styleUrls: ['./cs-toggle-switch.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsToggleSwitchComponent),
      multi: true
    }
  ]
})
export class CsToggleSwitchComponent implements ControlValueAccessor, OnInit {

  public get value() {
    return this._value;
  }

  public get isOn() {
    return this._value === this._boolean(true);
  }

  public get isOff() {
    return this._value === this._boolean(false);
  }

  @Input('inverseValue')
  public inverseValue: boolean;
  @Input('value')
  public set value(value: any) {
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }
    this._value = value;
    this._propagateChange(this.value);
    this.onChange.emit(this.value);
  }

  @Output('change')
  public onChange: EventEmitter<boolean> = new EventEmitter();

  private _value: boolean;
  private _propagateChange = (_: any) => { };

  constructor() { }

  public ngOnInit() {
  }

  public writeValue(value: boolean): void {
    if (value !== undefined) {
      this.value = value;
    }
  }
  public registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState?(isDisabled: boolean): void {
  }

  public off() {
    this.value = this._boolean(false);
  }

  public on() {
    this.value = this._boolean(true);
  }

  private _boolean(value: boolean) {
    return this.inverseValue ? !value : value;
  }
}
