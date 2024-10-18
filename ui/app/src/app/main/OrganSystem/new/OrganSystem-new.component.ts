import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'OrganSystem-new',
  templateUrl: './OrganSystem-new.component.html',
  styleUrls: ['./OrganSystem-new.component.scss']
})
export class OrganSystemNewComponent {
  @ViewChild("OrganSystemForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}