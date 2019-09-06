import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>This is {{name}} with {{age}}!</h1>`,
  styles: [`h1 { font-family: Arial; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
