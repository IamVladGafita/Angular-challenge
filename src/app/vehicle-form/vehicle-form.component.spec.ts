import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormComponent } from './vehicle-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('VehicleFormComponent', () => {
  let component: VehicleFormComponent;
  let fixture: ComponentFixture<VehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets vehicle options', () => {
    component.vehicleData = [{ type: 'car', subTypes: ['sedan', 'hatchback'] }];
    component.ngOnChanges();
    expect(component.vehicleOptions).toEqual([{ type: 'car', subTypes: ['sedan', 'hatchback'] }]);
  });

  it('sets subtypes', () => {
    component.vehicleData = [{ type: 'car', subTypes: ['sedan', 'hatchback'] }];
    component.ngOnChanges();
    component.form.patchValue({ type: 'car' });
    component.onVehicleChange();
    expect(component.subtypes).toEqual(['sedan', 'hatchback']);
  });

  it('resets the subtypes', () => {
    component.vehicleData = [{ type: 'car', subTypes: ['sedan', 'hatchback'] }];
    component.ngOnChanges();
    component.form.patchValue({ type: 'car', subType: 'sedan' });
    component.form.patchValue({ type: null });
    expect(component.subtypes).toEqual([]);
  });

  it('checks for invalid license number', () => {
    component.form.patchValue({ licenseNumber: 'invalid' });
    expect(component.form.controls['licenseNumber'].errors).toEqual({ isLicenseValid: false });
  });

  it('resets the form', () => {
    component.form.patchValue({ type: 'car', subType: 'sedan', licenseNumber: 'ABC-123' });
    component.form.reset();
    expect(component.form.value).toEqual({ type: null, subType: null, licenseNumber: null });
  });
});
