import { Component, OnInit } from '@angular/core';
import { MYCLASSES } from 'src/assets/data/myClasses';
@Component({
  selector: 'app-list-manual',
  templateUrl: './list-manual.component.html',
  styleUrls: ['./list-manual.component.css']
})
export class ListManualComponent implements OnInit {
  myclasses = MYCLASSES;
  constructor() { }
  goodToGo: boolean[] = [];
  goodStyle: string[] = [];
  ngOnInit(): void {
    for (let i = 0; i < this.myclasses.length; i++) {
      this.goodStyle[i] = 'none';
    }
  }

  onClickMe(i: any): void {
    this.goodToGo[i] = !this.goodToGo[i];
  }

  onClickMe2(i: any): void {
    this.goodStyle[i] = (this.goodStyle[i] === 'block') ? 'none' : 'block';
  }
}
