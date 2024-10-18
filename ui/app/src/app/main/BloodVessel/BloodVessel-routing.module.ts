import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodVesselHomeComponent } from './home/BloodVessel-home.component';
import { BloodVesselNewComponent } from './new/BloodVessel-new.component';
import { BloodVesselDetailComponent } from './detail/BloodVessel-detail.component';

const routes: Routes = [
  {path: '', component: BloodVesselHomeComponent},
  { path: 'new', component: BloodVesselNewComponent },
  { path: ':id', component: BloodVesselDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BloodVessel-detail-permissions'
      }
    }
  }
];

export const BLOODVESSEL_MODULE_DECLARATIONS = [
    BloodVesselHomeComponent,
    BloodVesselNewComponent,
    BloodVesselDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodVesselRoutingModule { }