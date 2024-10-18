import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Muscle-new',
  templateUrl: './Muscle-new.component.html',
  styleUrls: ['./Muscle-new.component.scss']
})
export class MuscleNewComponent {
  @ViewChild("MuscleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}