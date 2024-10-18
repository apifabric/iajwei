import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimbHomeComponent } from './home/Limb-home.component';
import { LimbNewComponent } from './new/Limb-new.component';
import { LimbDetailComponent } from './detail/Limb-detail.component';

const routes: Routes = [
  {path: '', component: LimbHomeComponent},
  { path: 'new', component: LimbNewComponent },
  { path: ':id', component: LimbDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Limb-detail-permissions'
      }
    }
  }
];

export const LIMB_MODULE_DECLARATIONS = [
    LimbHomeComponent,
    LimbNewComponent,
    LimbDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimbRoutingModule { }