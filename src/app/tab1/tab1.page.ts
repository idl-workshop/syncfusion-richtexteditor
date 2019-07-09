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

  constructor() {}

}
