import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { MembreAccountPage } from './member-account/member-account.page';
import { MembreCharacterPage } from './member-character/member-character.page';
import { PanelmembreComponent } from './panelmembre.component';


const panelmembreRoutes: Routes = [
    {
        path: 'membre', component: PanelmembreComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'account', component: MembreAccountPage },
            { path: 'character', component: MembreCharacterPage }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(panelmembreRoutes)],
    exports: [RouterModule]
})
export class PanelmembreRoutingModule { }
