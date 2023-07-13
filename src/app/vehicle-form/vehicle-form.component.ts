import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IVehicle } from '../app.component';
import { licensePlateValidator } from '../shared/validators/license-plate.validator';
@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnChanges {
  @Input() vehicleData: IVehicle[] = [];
  @Output() onSelectedType = new EventEmitter();

  public form = this.formBuilder.group({
    type: [''],
    subType: [''],
    licenseNumber: ['', licensePlateValidator]
  });
  public subtypes: string[] = [];
  public vehicleOptions: IVehicle[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(): void {
    this.vehicleOptions = this.vehicleData;
  }

  onVehicleChange(): void {
    const selectedVehicle = this.form.get('type')?.value;
    if (!selectedVehicle) {
      this.onSelectedType.emit('');
      this.subtypes = [];
      return;
    }
    this.form.patchValue({ subType: null });

    const selectedType = this.vehicleOptions.find(el => el.type === selectedVehicle);
    if (selectedType) {
      this.subtypes = selectedType.subTypes;
    }
    this.onSelectedType.emit(selectedType);
  }
}
