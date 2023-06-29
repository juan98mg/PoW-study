import { Component, Input, OnInit } from '@angular/core';
import * as sha256 from 'sha256';

@Component({
  selector: 'app-unit-block',
  templateUrl: './unit-block.component.html',
  styleUrls: ['./unit-block.component.scss'],
})
export class UnitBlockComponent implements OnInit {
  @Input('velocity') velocity: number = 1;
  @Input('difficulty') difficulty: number = 4;
  @Input('sendBlockDisabled') sendBlockDisabled: boolean = true;
  globalTimeout: any;
  textToEncode: string = '';
  nonce: number = 0;
  encodedText: string = '';
  union: string = '';
  id: string = '1';

  ngOnInit(): void {
    if (this.difficulty > 7) this.difficulty = 7;
    if (this.velocity > 10) this.velocity = 10; // Corregido: velocity en lugar de difficulty
  }

  mine() {
    if (this.velocity > 0) {
      if (this.globalTimeout) {
        clearTimeout(this.globalTimeout);
      }
      this.globalTimeout = setTimeout(() => {
        this.encode();
      }, this.velocity * 1000);
    } else {
      this.encode();
    }
  }

  clean() {
    this.textToEncode = '';
    this.nonce = 0;
    this.encodedText = '';
    this.union = '';
    clearTimeout(this.globalTimeout);
  }

  private encode() {
    this.union = `${this.nonce}--------------------${this.textToEncode}`;
    this.encodedText = sha256(`${this.nonce}${this.textToEncode}`);

    if (!this.verifyMined()) {
      this.nonce++;
      setTimeout(() => {
        this.mine();
      }, 0);
    }
  }

  private verifyMined(): boolean {
    if (this.textToEncode.length == 0) return false;
    const regex: RegExp = new RegExp(`^0{${this.difficulty}}`);
    const firstDifficulty = this.encodedText.substring(0, this.difficulty);

    return regex.test(firstDifficulty);
  }

  get isMined() {
    return this.verifyMined();
  }
}
