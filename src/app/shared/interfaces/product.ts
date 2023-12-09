export interface Product {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    price: number;
    availableQty: number;
}

export enum ProductType{
    Import = 1,
    Export = 2,
    Chemicle = 3,
    RowMaterial = 4
}
