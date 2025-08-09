
import { ReactNode } from "react"
// interface CardProps{}
// interface ButtonProps{}
export interface PropertyProps{
    name: string;
    address: AddressProps;
    rating: number;
    category: Array<string>;
    price: number;
    offers: OffersProps;
    image: string | ImageData;
    discount: number | string;
}
export interface AddressProps{
    state: string;
    city: string;
    country: string;
}
export interface OffersProps{
    bed: string;
    shower: string;
    occupants: string
}
export interface LayoutProps{
    children: ReactNode;
}