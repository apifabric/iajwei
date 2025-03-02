import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SENSEORGAN_MODULE_DECLARATIONS, SenseOrganRoutingModule} from  './SenseOrgan-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SenseOrganRoutingModule
  ],
  declarations: SENSEORGAN_MODULE_DECLARATIONS,
  exports: SENSEORGAN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SenseOrganModule { }