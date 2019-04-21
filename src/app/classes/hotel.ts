import { Rating } from './rating';
import { Address } from './address';

export class Hotel {
    id: String;
    name: String;
    description: String;
    latitude: number;
    longitude: number;
    website: String;
    contact: String;
    email: String;
    type: String;
    rating: Rating;
    address: Address;
    room_types: {};
}
