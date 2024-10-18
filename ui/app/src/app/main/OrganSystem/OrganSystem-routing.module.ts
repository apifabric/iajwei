import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganSystemHomeComponent } from './home/OrganSystem-home.component';
import { OrganSystemNewComponent } from './new/OrganSystem-new.component';
import { OrganSystemDetailComponent } from './detail/OrganSystem-detail.component';

const routes: Routes = [
  {path: '', component: OrganSystemHomeComponent},
  { path: 'new', component: OrganSystemNewComponent },
  { path: ':id', component: OrganSystemDetailComponent,
    data: {
      oPermission: {
        permissionId: 'OrganSystem-detail-permissions'
      }
    }
  },{
    path: ':system_id/Organ', loadChildren: () => import('../Organ/Organ.module').then(m => m.OrganModule),
    data: {
        oPermission: {
            permissionId: 'Organ-detail-permissions'
        }
    }
}
];

export const ORGANSYSTEM_MODULE_DECLARATIONS = [
    OrganSystemHomeComponent,
    OrganSystemNewComponent,
    OrganSystemDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganSystemRoutingModule { }