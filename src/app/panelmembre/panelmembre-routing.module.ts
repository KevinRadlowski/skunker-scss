import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { DkphistoriqueComponent } from './dkphistorique/dkphistorique.component';
import { DkpmodifyComponent } from './dkpmodify/dkpmodify.component';
import { PanelmembreComponent } from './panelmembre.component';


const panelmembreRoutes: Routes = [
    {
        path: 'membre', component: PanelmembreComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dkp', component: DkphistoriqueComponent },
            { path: 'edit-dkp', component: DkpmodifyComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(panelmembreRoutes)],
    exports: [RouterModule]
})
export class PanelmembreRoutingModule { }
