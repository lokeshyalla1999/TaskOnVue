export interface IColumns{
    name: string;
    label: string;
    align: string;
    field ?: any;
    sortable?: boolean;
}

export interface IRows{
    name:string,
    calories: number,
    fat:number | string ,
    carbs: number,
    protein: number,
    sodium: number,
    calcium: string,
    iron: string,
}

export interface IOptions{
    label : string,
    value : string
}

export interface Ilabeloptions{
    label : string,
    value : string,
    color : string
}