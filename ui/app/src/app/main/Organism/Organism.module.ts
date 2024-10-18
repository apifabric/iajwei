import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ORGANISM_MODULE_DECLARATIONS, OrganismRoutingModule} from  './Organism-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OrganismRoutingModule
  ],
  declarations: ORGANISM_MODULE_DECLARATIONS,
  exports: ORGANISM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganismModule { }