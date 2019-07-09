import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RichTextEditorModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class Tab3Page implements OnInit {

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

  // Get/set Text Value
  get value1(): string {
    return this.rte1.value; 
  }
  @Input()
  set value1(value: string) {
    this.rte1.value = value;
  }

  // Get/set Text Value
  get value2(): string {
    return this.rte2.value;
  }
  @Input()
  set value2(value: string) {
    this.rte2.value = value;
  }

  // Get/set Text Value
  get value3(): string {
    return this.rte3.value;
  }
  @Input()
  set value3(value: string) {
    this.rte3.value = value;
  }

  // Get/set Text Value
  get value4(): string {
    return this.rte4.value;
  }
  @Input()
  set value4(value: string) {
    this.rte4.value = value;
  }

  public height: number = 100;

  constructor() {}

  public save1() {
    console.log(`RTE #1 - ${this.value1}`);
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
    this.rte4.value = '<p>Value 4</p>';

    // Works!
//    console.log(this.markdownService.compile('I am using __markdown__.'));
//    console.log(Marked('I am using __Marked__.'));

// this.value = '<p>foo</p>';

//    this.rteObj.value = '**test** foo';
// this.rteObj.height = 300;
  }

}
