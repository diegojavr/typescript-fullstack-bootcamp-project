import { Decimal } from 'decimal.js';
import { Collection } from "../../models/Collection";
import { Genre } from "../../models/Genre";
import { Variant } from "../../models/Variant";

export interface ProductDtoRequest{ 
    name: string;
    description: string | null;
    image: string | null;
    price: number | Decimal;
    releaseDate: Date | string;
    genres?: Genre[];
    developer: string;
    publisher: string;
    variants?: Variant[];
    collections?: Collection[];
}