import { Component, Input, OnChanges } from '@angular/core';
import { IAsset } from '../app.component';

@Component({
  selector: 'app-vehicle-image',
  templateUrl: './vehicle-image.component.html',
  styleUrls: ['./vehicle-image.component.css']
})
export class VehicleImageComponent implements OnChanges {
  @Input() asset!: IAsset;
  public vehicleAsset!: IAsset;
  constructor() { }

  ngOnChanges() {
    this.vehicleAsset = this.asset;
  }

}
