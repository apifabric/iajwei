import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Organism-new',
  templateUrl: './Organism-new.component.html',
  styleUrls: ['./Organism-new.component.scss']
})
export class OrganismNewComponent {
  @ViewChild("OrganismForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}