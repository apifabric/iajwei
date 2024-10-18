import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TissueHomeComponent } from './home/Tissue-home.component';
import { TissueNewComponent } from './new/Tissue-new.component';
import { TissueDetailComponent } from './detail/Tissue-detail.component';

const routes: Routes = [
  {path: '', component: TissueHomeComponent},
  { path: 'new', component: TissueNewComponent },
  { path: ':id', component: TissueDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tissue-detail-permissions'
      }
    }
  },{
    path: ':tissue_id/Cell', loadChildren: () => import('../Cell/Cell.module').then(m => m.CellModule),
    data: {
        oPermission: {
            permissionId: 'Cell-detail-permissions'
        }
    }
}
];

export const TISSUE_MODULE_DECLARATIONS = [
    TissueHomeComponent,
    TissueNewComponent,
    TissueDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TissueRoutingModule { }