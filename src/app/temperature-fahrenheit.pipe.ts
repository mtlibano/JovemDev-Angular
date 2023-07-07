import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureFahrenheit'
})
export class TemperatureFahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    return (value * 9 / 5) + 32;
  }

}