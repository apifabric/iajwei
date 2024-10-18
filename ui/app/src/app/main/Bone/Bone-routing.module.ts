import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoneHomeComponent } from './home/Bone-home.component';
import { BoneNewComponent } from './new/Bone-new.component';
import { BoneDetailComponent } from './detail/Bone-detail.component';

const routes: Routes = [
  {path: '', component: BoneHomeComponent},
  { path: 'new', component: BoneNewComponent },
  { path: ':id', component: BoneDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Bone-detail-permissions'
      }
    }
  },{
    path: ':connecting_bone_1_id/Joint', loadChildren: () => import('../Joint/Joint.module').then(m => m.JointModule),
    data: {
        oPermission: {
            permissionId: 'Joint-detail-permissions'
        }
    }
},{
    path: ':connecting_bone_2_id/Joint', loadChildren: () => import('../Joint/Joint.module').then(m => m.JointModule),
    data: {
        oPermission: {
            permissionId: 'Joint-detail-permissions'
        }
    }
},{
    path: ':bone_id/Muscle', loadChildren: () => import('../Muscle/Muscle.module').then(m => m.MuscleModule),
    data: {
        oPermission: {
            permissionId: 'Muscle-detail-permissions'
        }
    }
}
];

export const BONE_MODULE_DECLARATIONS = [
    BoneHomeComponent,
    BoneNewComponent,
    BoneDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneRoutingModule { }