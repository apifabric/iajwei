import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MUSCLE_MODULE_DECLARATIONS, MuscleRoutingModule} from  './Muscle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MuscleRoutingModule
  ],
  declarations: MUSCLE_MODULE_DECLARATIONS,
  exports: MUSCLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MuscleModule { }