export interface Item {
    id: number;
    name: string;
    subitems: Subitems[]
}


export interface Subitems
{
    id: number,
    name: string,
    selected : boolean
}
