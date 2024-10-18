import { MenuRootItem } from 'ontimize-web-ngx';

import { BloodVesselCardComponent } from './BloodVessel-card/BloodVessel-card.component';

import { BoneCardComponent } from './Bone-card/Bone-card.component';

import { CellCardComponent } from './Cell-card/Cell-card.component';

import { JointCardComponent } from './Joint-card/Joint-card.component';

import { LimbCardComponent } from './Limb-card/Limb-card.component';

import { MuscleCardComponent } from './Muscle-card/Muscle-card.component';

import { NerveCardComponent } from './Nerve-card/Nerve-card.component';

import { OrganCardComponent } from './Organ-card/Organ-card.component';

import { OrganSystemCardComponent } from './OrganSystem-card/OrganSystem-card.component';

import { OrganismCardComponent } from './Organism-card/Organism-card.component';

import { SenseOrganCardComponent } from './SenseOrgan-card/SenseOrgan-card.component';

import { TissueCardComponent } from './Tissue-card/Tissue-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'BloodVessel', name: 'BLOODVESSEL', icon: 'view_list', route: '/main/BloodVessel' }
    
        ,{ id: 'Bone', name: 'BONE', icon: 'view_list', route: '/main/Bone' }
    
        ,{ id: 'Cell', name: 'CELL', icon: 'view_list', route: '/main/Cell' }
    
        ,{ id: 'Joint', name: 'JOINT', icon: 'view_list', route: '/main/Joint' }
    
        ,{ id: 'Limb', name: 'LIMB', icon: 'view_list', route: '/main/Limb' }
    
        ,{ id: 'Muscle', name: 'MUSCLE', icon: 'view_list', route: '/main/Muscle' }
    
        ,{ id: 'Nerve', name: 'NERVE', icon: 'view_list', route: '/main/Nerve' }
    
        ,{ id: 'Organ', name: 'ORGAN', icon: 'view_list', route: '/main/Organ' }
    
        ,{ id: 'OrganSystem', name: 'ORGANSYSTEM', icon: 'view_list', route: '/main/OrganSystem' }
    
        ,{ id: 'Organism', name: 'ORGANISM', icon: 'view_list', route: '/main/Organism' }
    
        ,{ id: 'SenseOrgan', name: 'SENSEORGAN', icon: 'view_list', route: '/main/SenseOrgan' }
    
        ,{ id: 'Tissue', name: 'TISSUE', icon: 'view_list', route: '/main/Tissue' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BloodVesselCardComponent

    ,BoneCardComponent

    ,CellCardComponent

    ,JointCardComponent

    ,LimbCardComponent

    ,MuscleCardComponent

    ,NerveCardComponent

    ,OrganCardComponent

    ,OrganSystemCardComponent

    ,OrganismCardComponent

    ,SenseOrganCardComponent

    ,TissueCardComponent

];