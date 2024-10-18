import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ORGANSYSTEM_MODULE_DECLARATIONS, OrganSystemRoutingModule} from  './OrganSystem-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OrganSystemRoutingModule
  ],
  declarations: ORGANSYSTEM_MODULE_DECLARATIONS,
  exports: ORGANSYSTEM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganSystemModule { }