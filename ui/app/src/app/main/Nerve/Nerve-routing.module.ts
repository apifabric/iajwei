import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerveHomeComponent } from './home/Nerve-home.component';
import { NerveNewComponent } from './new/Nerve-new.component';
import { NerveDetailComponent } from './detail/Nerve-detail.component';

const routes: Routes = [
  {path: '', component: NerveHomeComponent},
  { path: 'new', component: NerveNewComponent },
  { path: ':id', component: NerveDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Nerve-detail-permissions'
      }
    }
  },{
    path: ':nerve_id/SenseOrgan', loadChildren: () => import('../SenseOrgan/SenseOrgan.module').then(m => m.SenseOrganModule),
    data: {
        oPermission: {
            permissionId: 'SenseOrgan-detail-permissions'
        }
    }
}
];

export const NERVE_MODULE_DECLARATIONS = [
    NerveHomeComponent,
    NerveNewComponent,
    NerveDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NerveRoutingModule { }