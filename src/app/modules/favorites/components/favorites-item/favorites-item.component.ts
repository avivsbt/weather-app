import { Component, OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';
import { Weather } from 'src/app/modules/weather/models/weather.model';

@Component({
    selector: 'app-favorites-item',
    templateUrl: './favorites-item.component.html',
    styleUrls: ['./favorites-item.component.scss']
})

export class FavoritesItemComponent extends BaseComponent implements OnInit, OnDestroy {

    @Input() weathers: Weather[];

    constructor(
        private injector: Injector
    ) {
        super(injector);
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

}
