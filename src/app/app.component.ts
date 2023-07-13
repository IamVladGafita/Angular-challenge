import { Component } from '@angular/core';

export const VechileAssets = {
  auto: 'assets/auto.jpg',
  motor: 'assets/motor.jpg',
  scooter: 'assets/scooter.jpg',
}

export enum Vehicles {
  Auto = 'Auto',
  Motor = 'Motor',
  Scooter = 'Scooter'
}
export interface IVehicle {
  type: string;
  subTypes: string[];
}
export interface IAsset {
  url: string;
  alt: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public vechileAsset: IAsset = { url: VechileAssets.auto, alt: Vehicles.Auto };

  public vehicles: IVehicle[] = [{
    type: Vehicles.Auto,
    subTypes: ['Hatchback',
      'Sedan',
      'Station',
      'Cabriolet',
      'Coupé',
      'Multi Purpose Vehicle (MVP)',
      'Terreinauto']
  }, {
    type: Vehicles.Motor,
    subTypes: ['All-road',
      'Naked',
      'Enduro',
      'Race',
      'Toermotor',
      'Chopper',
      'Zijspan']
  }, {
    type: Vehicles.Scooter,
    subTypes: []
  }];

  public isTypeSelected = false;

  onSelectedType(event: any) {
    this.isTypeSelected = false;
    if (event) {
      this.isTypeSelected = true;
    }
    if (event.type === Vehicles.Auto) {
      this.vechileAsset = { url: VechileAssets.auto, alt: Vehicles.Auto };
    } else if (event.type === Vehicles.Motor) {
      this.vechileAsset = { url: VechileAssets.motor, alt: Vehicles.Motor };
    } else if (event.type === Vehicles.Scooter) {
      this.vechileAsset = { url: VechileAssets.scooter, alt: Vehicles.Scooter };
    }
  }
}
