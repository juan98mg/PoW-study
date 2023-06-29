import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as sha256 from 'sha256';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss'],
})
export class HashComponent {
  typedText: string = '';

  constructor(public dialog: MatDialog) {}

  encode() {
    console.log('=========>', this.typedText);
    if (this.typedText.length == 0) return;

    const encodedText = sha256(this.typedText);
    const dialogRef = this.dialog.open(DialogResultEncondedText, {
      data: { textEncoded: encodedText, textOriginal: this.typedText },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.typedText = '';
    });
  }
}

@Component({
  selector: 'app-encoded-result',
  templateUrl: 'encoded-text.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class DialogResultEncondedText {
  constructor(
    public dialogRef: MatDialogRef<DialogResultEncondedText>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get originalText() {
    return this.data.textOriginal.substring(0, 64) + '...';
  }
}

export interface DialogData {
  textEncoded: string;
  textOriginal: string;
}
