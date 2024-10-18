import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganHomeComponent } from './home/Organ-home.component';
import { OrganNewComponent } from './new/Organ-new.component';
import { OrganDetailComponent } from './detail/Organ-detail.component';

const routes: Routes = [
  {path: '', component: OrganHomeComponent},
  { path: 'new', component: OrganNewComponent },
  { path: ':id', component: OrganDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Organ-detail-permissions'
      }
    }
  },{
    path: ':organ_id/BloodVessel', loadChildren: () => import('../BloodVessel/BloodVessel.module').then(m => m.BloodVesselModule),
    data: {
        oPermission: {
            permissionId: 'BloodVessel-detail-permissions'
        }
    }
},{
    path: ':organ_id/Nerve', loadChildren: () => import('../Nerve/Nerve.module').then(m => m.NerveModule),
    data: {
        oPermission: {
            permissionId: 'Nerve-detail-permissions'
        }
    }
}
];

export const ORGAN_MODULE_DECLARATIONS = [
    OrganHomeComponent,
    OrganNewComponent,
    OrganDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganRoutingModule { }