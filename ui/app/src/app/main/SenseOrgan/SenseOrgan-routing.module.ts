import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenseOrganHomeComponent } from './home/SenseOrgan-home.component';
import { SenseOrganNewComponent } from './new/SenseOrgan-new.component';
import { SenseOrganDetailComponent } from './detail/SenseOrgan-detail.component';

const routes: Routes = [
  {path: '', component: SenseOrganHomeComponent},
  { path: 'new', component: SenseOrganNewComponent },
  { path: ':id', component: SenseOrganDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SenseOrgan-detail-permissions'
      }
    }
  }
];

export const SENSEORGAN_MODULE_DECLARATIONS = [
    SenseOrganHomeComponent,
    SenseOrganNewComponent,
    SenseOrganDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenseOrganRoutingModule { }