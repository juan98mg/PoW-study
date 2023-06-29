import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  velocity = 0;
  difficulty = 4;
  formatLabel(value: number): string {
    return `${value}sec`;
  }
}
