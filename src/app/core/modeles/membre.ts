import { Roles } from 'src/app/paneladmin/models/Roles.model';

export class Membre {
    id: number;
    username: string;
    classe: string;
    race: string;
    premierMetier: string;
    secondMetier: string;
    niveauPremierMetier: number;
    niveauSecondMetier: number;
    level: number;
    roles: Roles;
}
