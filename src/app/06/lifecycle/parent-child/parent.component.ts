import { Component, AfterContentChecked, ContentChild } from "@angular/core";

import { PChildComponent } from "./p-child/p-child.component";

@Component({
  selector: "my-parent",
  templateUrl: "./parent.html",
  styleUrls: ["./parent.style.css"],
})
export class ParentComponent implements AfterContentChecked {
  // PChildeComponentを取得 - というより設定
  @ContentChild(PChildComponent) pChild: PChildComponent;
  pppoem = "";

  // 外部コンテンツの確認後に処理
  ngAfterContentChecked(): void {
    if (this.pppoem !== this.pChild.pppoem) {
      this.pppoem = this.pChild.pppoem;
    }
  }
}
