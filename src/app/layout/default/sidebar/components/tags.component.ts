import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `
  <nz-card  nzTitle="Card title" [nzExtra]="extraTemplate">
  <nz-tag [nzColor]="'magenta'">magenta</nz-tag>
  <nz-tag [nzColor]="'red'">red</nz-tag>
  <nz-tag [nzColor]="'volcano'">volcano</nz-tag>
  <nz-tag [nzColor]="'orange'">orange</nz-tag>
  <nz-tag [nzColor]="'gold'">gold</nz-tag>
  <nz-tag [nzColor]="'lime'">lime</nz-tag>
  <nz-tag [nzColor]="'green'">green</nz-tag>
  <nz-tag [nzColor]="'cyan'">cyan</nz-tag>
  <nz-tag [nzColor]="'blue'">blue</nz-tag>
  <nz-tag [nzColor]="'geekblue'">geekblue</nz-tag>
  <nz-tag [nzColor]="'purple'">purple</nz-tag>
</nz-card>
<ng-template #extraTemplate>
  <a>More</a>
</ng-template>

  `,
  styles  : [
      `p {
      margin: 0;
    }`
  ]
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
