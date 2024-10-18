import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BloodVessel-new',
  templateUrl: './BloodVessel-new.component.html',
  styleUrls: ['./BloodVessel-new.component.scss']
})
export class BloodVesselNewComponent {
  @ViewChild("BloodVesselForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}