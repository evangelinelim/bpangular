import { Pipe, PipeTransform } from "@angular/core";
import { Player } from "./Player";
@Pipe({
    name: 'orderByScore'
})
export class OrderByScorePipe implements PipeTransform {
    transform(items: any[]): any[] {
        return items.sort((a, b) => {
            let a_sort: number = a.highScore;
            let b_sort: number = b.highScore;
            return a_sort > b_sort ? -1 : (a_sort < b_sort ? 1 : 0);
        });
    }
}