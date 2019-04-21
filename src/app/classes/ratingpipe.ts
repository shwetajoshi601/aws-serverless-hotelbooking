import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from './Rating';

@Pipe({ name: 'calculateAvg' })
export class RatingPipe implements PipeTransform {

    transform(rating: Rating) {
        return ((
            rating.food.valueOf() +
            rating.rooms.valueOf() +
            rating.cleanliness.valueOf() +
            rating.facilities.valueOf() +
            rating.service.valueOf() +
            rating.value_for_money.valueOf()) / 6).toPrecision(2);
    }
}
