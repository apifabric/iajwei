import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellHomeComponent } from './home/Cell-home.component';
import { CellNewComponent } from './new/Cell-new.component';
import { CellDetailComponent } from './detail/Cell-detail.component';

const routes: Routes = [
  {path: '', component: CellHomeComponent},
  { path: 'new', component: CellNewComponent },
  { path: ':id', component: CellDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Cell-detail-permissions'
      }
    }
  }
];

export const CELL_MODULE_DECLARATIONS = [
    CellHomeComponent,
    CellNewComponent,
    CellDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CellRoutingModule { }