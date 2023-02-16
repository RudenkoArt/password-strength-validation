import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css'],
})
export class PassowordStrengthBarComponent implements OnChanges {
  @Input() passwordToCheck: any;

  bar0: string;
  bar1: string;
  bar2: string;

  private strengthColors = {
    default: ['#ddd', '#ddd', '#ddd'],
    short: ['#ff0000', '#ff0000', '#ff0000'],
    easy: ['#ff0000', '#ddd', '#ddd'],
    medium: ['#ffff00', '#ffff00', '#ddd'],
    strong: ['#00ff00', '#00ff00', '#00ff00'],
  };

  private static measureStrength(pass: string) {
    if (pass.length < 8) return 'short';
    let score = 0;

    const variations = {
      digits: /\d/.test(pass),
      letters: /[A-Za-z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    for (let check in variations) {
      score += (variations as any)[check] ? 1 : 0;
    }

    if (score === 1) return 'easy';
    if (score === 2) return 'medium';

    return 'strong';
  }

  private setBarColors(colors: string[]) {
    for (let _n = 0; _n < 3; _n++) {
      (this as any)['bar' + _n] = colors[_n];
    }
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;

    if (password) {
      const strength = PassowordStrengthBarComponent.measureStrength(password);
      this.setBarColors(this.strengthColors[strength]);
    } else {
      this.setBarColors(this.strengthColors['default']);
    }
  }
}
