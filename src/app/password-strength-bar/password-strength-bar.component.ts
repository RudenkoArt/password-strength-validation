import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.css'],
})
export class PassowordStrengthBarComponent implements OnChanges {
  @Input() passwordToCheck!: string;

  barColors!: string[];

  private strengthColors: { [key: string]: string[] } = {
    default: ['#ddd', '#ddd', '#ddd'],
    short: ['#ff0000', '#ff0000', '#ff0000'],
    easy: ['#ff0000', '#ddd', '#ddd'],
    medium: ['#ffff00', '#ffff00', '#ddd'],
    strong: ['#00ff00', '#00ff00', '#00ff00'],
  };

  private static measureStrength(pass: string): string {
    if (pass.length < 8) return 'short';
    let score: number = 0;

    const variations: { [key: string]: boolean } = {
      digits: /\d/.test(pass),
      letters: /[A-Za-z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    for (let check in variations) {
      score += variations[check] ? 1 : 0;
    }

    if (score === 1) return 'easy';
    if (score === 2) return 'medium';

    return 'strong';
  }

  private setBarColors(colors: string[]): void {
    this.barColors = colors;
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
