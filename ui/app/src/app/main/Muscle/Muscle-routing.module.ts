import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleHomeComponent } from './home/Muscle-home.component';
import { MuscleNewComponent } from './new/Muscle-new.component';
import { MuscleDetailComponent } from './detail/Muscle-detail.component';

const routes: Routes = [
  {path: '', component: MuscleHomeComponent},
  { path: 'new', component: MuscleNewComponent },
  { path: ':id', component: MuscleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Muscle-detail-permissions'
      }
    }
  }
];

export const MUSCLE_MODULE_DECLARATIONS = [
    MuscleHomeComponent,
    MuscleNewComponent,
    MuscleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuscleRoutingModule { }