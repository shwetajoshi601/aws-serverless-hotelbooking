import { Address } from './address';
import { User } from './user';

export class Booking {
    hotel_name: String;
    hotel_address: Address;
    hotel_id: String;
    user_detail: User;
    check_in: Date;
    check_out: Date;
    no_adults: number;
    no_children: number;
    room_info: {};
    total_price_for_room: number;
    tax: number;
    total_with_tax: number;
}
