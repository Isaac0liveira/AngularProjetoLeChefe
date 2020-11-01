import { Injectable } from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from "@angular/cdk/portal";
import {SpinnerComponent} from "../compartilhado/spinner/spinner.component";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  public show(){
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    });
    this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
  }

  public hide(){
    this.overlayRef.detach();
    this.overlayRef = undefined;
  }

}
