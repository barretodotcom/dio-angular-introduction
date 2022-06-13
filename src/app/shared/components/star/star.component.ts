import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'star-component',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating:number;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 94/5
    }
}