import { Component } from '@angular/core';

import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Tab1Page {

  // https://ej2.syncfusion.com/angular/documentation/getting-started/ionic/
  // https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started/

  // unusued
  public value1: string = `
  <h1>foo 1</h1>
  `;

  // 2-way bound
  public value2: string = `
  <h1>foo 2</h1>
  `;

  // 2-way bound
  public value3: string = `
  <h1>foo 3</h1>
  `;

  public height: number = 500;

  constructor() {}

  public save1() {
    console.log(`RTE #1 - unknown`);
  }

  public save2() {
    console.log(`RTE #2 - ${this.value2}`);
  }

  public save3() {
    console.log(`RTE #3 - ${this.value3}`);
  }

}
