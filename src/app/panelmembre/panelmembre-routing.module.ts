import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DkphistoriqueComponent } from './dkphistorique/dkphistorique.component';
import { PanelmembreComponent } from './panelmembre.component';
import { DkpmodifyComponent } from './dkpmodify/dkpmodify.component';

const panelmembreRoutes: Routes = [
    {
        path: 'membre', component: PanelmembreComponent,
        children: [
            { path: 'dkp', component: DkphistoriqueComponent },
            { path: 'edit-dkp', component: DkpmodifyComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(panelmembreRoutes)],
    exports: [RouterModule]
})
export class PanelmembreRoutingModule { }
