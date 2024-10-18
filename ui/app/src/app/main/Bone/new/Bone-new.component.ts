import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Bone-new',
  templateUrl: './Bone-new.component.html',
  styleUrls: ['./Bone-new.component.scss']
})
export class BoneNewComponent {
  @ViewChild("BoneForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}