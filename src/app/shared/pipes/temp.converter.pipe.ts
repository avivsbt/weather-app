
import { PipeTransform, Pipe } from '@angular/core';
import { Unit } from 'src/app/enums/temperature-unit.enum';

@Pipe({
    name: 'tempConverter'
})

export class TempConverterPipe implements PipeTransform {
    transform(unit: string) {
        switch (unit) {
            case Unit.Celsius: {
                return 'C';
            }
            case Unit.Fahrenheit: {
                return 'F';
            }
            default: {
                return 'C'
            }
        }
    }
}