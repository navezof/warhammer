export type Availability = 'Common' | 'Scarce' | 'Rare' | 'Exotic'
export type Reach = 'Average' | 'Very Short' | 'Personal' | 'Long' | 'Very Long' | number;

export interface WeaponType {
    name: string;
    price: number;
    encumbrance: number;
    availability: Availability;
    reach: Reach;
    damage: string;
    qualities: Quality[];
}