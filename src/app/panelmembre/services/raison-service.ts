import { Injectable } from '@angular/core';

import { Raison } from '../model/raison';
import { Raid } from '../model/raid';

@Injectable({
    providedIn: 'root'
})
export class RaisonService {
    getRaisons(): Raison[] {
        let raisons = [
            new Raison('BonusHeure', 'Bonus à l\'heure'),
            new Raison('BossKill', 'Bonus de Boss Kill'),
            new Raison('FinRaid', 'Bonus d\'achèvement de raid'),
            new Raison('BonusFirstKill', 'Nouveau bonus de Boss Kill'),
            new Raison('CorrectionErreur', 'Correction d\'erreur'),
            new Raison('DKPAjuster', 'DKP Ajuster'),
            new Raison('Absence', 'Absence injustifiée'),
            new Raison('Autre', 'Autre'),
        ]
        return raisons;

    }
    getRaids(): Raid[] {
        let raids = [
            new Raid('MC', 'MC'),
            new Raid('BWL', 'BWL'),
            new Raid('Onyxia', 'Onyxia'),
            new Raid('BossMonde', 'Boss du Monde')
        ]
        return raids;
    }
    // createUser(user: User) {
    //     //Log user data in console
    //     console.log("User Name: " + user.userName);
    //     console.log("Profile Id: " + user.profile.prId);
    //     console.log("Profile Name: " + user.profile.prName);
    //     for (let i = 0; i < user.technologies.length; i++) {
    //         console.log("Technology Id: " + user.technologies[i].techId);
    //         console.log("Technology Name: " + user.technologies[i].techName);
    //     }
    // }
}