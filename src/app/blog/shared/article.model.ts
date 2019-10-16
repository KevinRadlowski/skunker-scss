import { Tag } from './tag.model';

export interface Article {
    id: number;
    auteur: string;
    contenu: string;
    datePublication: Date;
    description: string;
    imgUrl: string;
    titre: string;
    note: number;
    tags: Tag[];
    // temps: String;
}
