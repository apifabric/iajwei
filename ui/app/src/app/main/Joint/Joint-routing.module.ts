import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JointHomeComponent } from './home/Joint-home.component';
import { JointNewComponent } from './new/Joint-new.component';
import { JointDetailComponent } from './detail/Joint-detail.component';

const routes: Routes = [
  {path: '', component: JointHomeComponent},
  { path: 'new', component: JointNewComponent },
  { path: ':id', component: JointDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Joint-detail-permissions'
      }
    }
  }
];

export const JOINT_MODULE_DECLARATIONS = [
    JointHomeComponent,
    JointNewComponent,
    JointDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JointRoutingModule { }