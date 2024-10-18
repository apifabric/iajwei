import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Tissue-new',
  templateUrl: './Tissue-new.component.html',
  styleUrls: ['./Tissue-new.component.scss']
})
export class TissueNewComponent {
  @ViewChild("TissueForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}