import { TemperatureFahrenheitPipe } from './temperature-fahrenheit.pipe';

describe('TemperatureFahrenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureFahrenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
