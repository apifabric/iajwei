import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'BloodVessel', loadChildren: () => import('./BloodVessel/BloodVessel.module').then(m => m.BloodVesselModule) },
    
        { path: 'Bone', loadChildren: () => import('./Bone/Bone.module').then(m => m.BoneModule) },
    
        { path: 'Cell', loadChildren: () => import('./Cell/Cell.module').then(m => m.CellModule) },
    
        { path: 'Joint', loadChildren: () => import('./Joint/Joint.module').then(m => m.JointModule) },
    
        { path: 'Limb', loadChildren: () => import('./Limb/Limb.module').then(m => m.LimbModule) },
    
        { path: 'Muscle', loadChildren: () => import('./Muscle/Muscle.module').then(m => m.MuscleModule) },
    
        { path: 'Nerve', loadChildren: () => import('./Nerve/Nerve.module').then(m => m.NerveModule) },
    
        { path: 'Organ', loadChildren: () => import('./Organ/Organ.module').then(m => m.OrganModule) },
    
        { path: 'OrganSystem', loadChildren: () => import('./OrganSystem/OrganSystem.module').then(m => m.OrganSystemModule) },
    
        { path: 'Organism', loadChildren: () => import('./Organism/Organism.module').then(m => m.OrganismModule) },
    
        { path: 'SenseOrgan', loadChildren: () => import('./SenseOrgan/SenseOrgan.module').then(m => m.SenseOrganModule) },
    
        { path: 'Tissue', loadChildren: () => import('./Tissue/Tissue.module').then(m => m.TissueModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }