import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-side-buttons',
  templateUrl: './weather-side-buttons.component.html',
  styleUrls: ['./weather-side-buttons.components.scss']
})

export class WeatherSideButtonsComponent implements OnInit {

  @Input() weather: Weather;
  @Input() temperatureUnit: string;
  @Input() icon: any;
  @Output() toggleUnit: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleLocation: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  public onToggleLocation(): void {
    this.toggleLocation.emit();
  }

  public onToggleUnit(value: string): void {
    this.toggleUnit.emit(value);
  }

}
