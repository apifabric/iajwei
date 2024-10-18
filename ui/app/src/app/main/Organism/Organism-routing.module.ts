import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganismHomeComponent } from './home/Organism-home.component';
import { OrganismNewComponent } from './new/Organism-new.component';
import { OrganismDetailComponent } from './detail/Organism-detail.component';

const routes: Routes = [
  {path: '', component: OrganismHomeComponent},
  { path: 'new', component: OrganismNewComponent },
  { path: ':id', component: OrganismDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Organism-detail-permissions'
      }
    }
  },{
    path: ':organism_id/Bone', loadChildren: () => import('../Bone/Bone.module').then(m => m.BoneModule),
    data: {
        oPermission: {
            permissionId: 'Bone-detail-permissions'
        }
    }
},{
    path: ':organism_id/Limb', loadChildren: () => import('../Limb/Limb.module').then(m => m.LimbModule),
    data: {
        oPermission: {
            permissionId: 'Limb-detail-permissions'
        }
    }
},{
    path: ':organism_id/OrganSystem', loadChildren: () => import('../OrganSystem/OrganSystem.module').then(m => m.OrganSystemModule),
    data: {
        oPermission: {
            permissionId: 'OrganSystem-detail-permissions'
        }
    }
},{
    path: ':organism_id/Tissue', loadChildren: () => import('../Tissue/Tissue.module').then(m => m.TissueModule),
    data: {
        oPermission: {
            permissionId: 'Tissue-detail-permissions'
        }
    }
}
];

export const ORGANISM_MODULE_DECLARATIONS = [
    OrganismHomeComponent,
    OrganismNewComponent,
    OrganismDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismRoutingModule { }