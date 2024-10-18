import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Limb-new',
  templateUrl: './Limb-new.component.html',
  styleUrls: ['./Limb-new.component.scss']
})
export class LimbNewComponent {
  @ViewChild("LimbForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}