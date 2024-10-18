import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Nerve-new',
  templateUrl: './Nerve-new.component.html',
  styleUrls: ['./Nerve-new.component.scss']
})
export class NerveNewComponent {
  @ViewChild("NerveForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}