import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RichTextEditorModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Tab2Page implements OnInit {

  @ViewChild('rte1')
  public rte1: RichTextEditorComponent;

  @ViewChild('rte2')
  public rte2: RichTextEditorComponent;

  @ViewChild('rte3')
  public rte3: RichTextEditorComponent;

  @ViewChild('rte4')
  public rte4: RichTextEditorComponent;

  // https://ej2.syncfusion.com/angular/documentation/getting-started/ionic/
  // https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started/

  // unusued
  public value1: string = `
  <h1>foo 1</h1>
  `;

  // Get/set Text Value
  get value2(): string {
    return this.rte2.value; // this.rteObj.value; // 'Video';
  }
  @Input()
  set value2(value: string) {
    this.rte2.value = value; //.rteObj.value = value; // 'Video';
  }

  // // 1-way bound
  // public value2: string = `
  // <h1>foo 2</h1>
  // `;

  // // 1-way bound
  // public value3: string = `
  // <h1>foo 3</h1>
  // `;

  // Get/set Text Value
  get value3(): string {
    return this.rte3.value; // this.rteObj.value; // 'Video';
  }
  @Input()
  set value3(value: string) {
    this.rte3.value = value; //.rteObj.value = value; // 'Video';
  }

  // Get/set Text Value
  get value4(): string {
    return this.rte4.value; // this.rteObj.value; // 'Video';
  }
  @Input()
  set value4(value: string) {
    this.rte4.value = value; //.rteObj.value = value; // 'Video';
  }


  public height: number = 100;

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

  public save4() {
    console.log(`RTE #4 - ${this.value4}`);
  }

  ngOnInit() {

    this.rte1.value = '<p>Value 1</p>'; // should override template?
    this.rte2.value = '<p>Value 2</p>';
    this.rte3.value = '<p>Value 3</p>';
    this.rte3.value = '<p>Value 4</p>';

    // Works!
//    console.log(this.markdownService.compile('I am using __markdown__.'));
//    console.log(Marked('I am using __Marked__.'));

// this.value = '<p>foo</p>';

//    this.rteObj.value = '**test** foo';
// this.rteObj.height = 300;
  }

}
