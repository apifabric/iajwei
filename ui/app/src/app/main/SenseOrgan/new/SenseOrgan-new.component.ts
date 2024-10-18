import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SenseOrgan-new',
  templateUrl: './SenseOrgan-new.component.html',
  styleUrls: ['./SenseOrgan-new.component.scss']
})
export class SenseOrganNewComponent {
  @ViewChild("SenseOrganForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}