import { Roles } from './Roles.model';

export class Membre {
    id: number;
    pseudo: string;
    username: string;
    classe: string;
    race: string;
    roles: Roles;
    img: string;
    grade: string;
    email: string;
    level: number;
    niveauPremierMetier: number;
    niveauSecondMetier: number;
    password: string;
    premierMetier: string;
    secondMetier: string;
    specialisation: string;
}

