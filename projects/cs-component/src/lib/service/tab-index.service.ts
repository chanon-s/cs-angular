import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsTabIndexService {

  constructor() { }

  public disableChildren(parentElement) {
    const elems = parentElement.querySelectorAll('*');
    return this.disable.apply(this, elems);
  }

  public enableChildren(parentElement) {
    const elems = parentElement.querySelectorAll('[tabindex]');
    return this.enable.apply(this, elems);
  }

  public disable(...elems) {
    const disableds = [];
    elems.forEach((elem) => {
      if (elem.tabIndex < 0) {
        return false;
      }
      if (elem.tagName === 'A' && !elem.href && elem.tabIndex === 0) {
        return false;
      }
      elem.tabIndex = (elem.tabIndex + 10) * -1;
      disableds.push(elem);
    });
    return disableds;
  }

  public enable(...elems) {
    const enableds = [];
    elems.forEach((elem) => {
      if (elem.tabIndex > -10) {
        return false;
      }
      elem.tabIndex = Math.abs(elem.tabIndex + 10);
      if (elem.hasAttribute('tabindex') && elem.tabIndex === 0) {
        elem.removeAttribute('tabindex');
      }
      enableds.push(elem);
    });
    return enableds;
  }
}
