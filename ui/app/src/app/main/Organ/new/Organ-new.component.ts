import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Organ-new',
  templateUrl: './Organ-new.component.html',
  styleUrls: ['./Organ-new.component.scss']
})
export class OrganNewComponent {
  @ViewChild("OrganForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}