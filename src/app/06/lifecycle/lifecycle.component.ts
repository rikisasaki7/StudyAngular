import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { ViewChildeComponent } from "./view-child/view-child.component";

@Component({
  selector: "my-app-lifecycle",
  templateUrl: "./lifecycle.html",
  styleUrls: ["./lifecycle.style.css"],
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  show = true;
  current = new Date();

  // チェックボックス変更時に実行
  onchange(): void {
    this.show = !this.show;
    this.current = new Date();
  }

  constructor() {
    console.log("constructor");
  }

  // ライフサイクルメソッド
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    // 子コンポーネントの値poems
    this.children.forEach((item, i) => {
      if (this.poems[i] !== item.poem) {
        // 非同期化して、処理を次の更新サイクルへ持ち越している
        setTimeout(() => {
          this.poems[i] = item.poem;
        }, 0);
        // // これだとエラーになる
        // this.poems[i] = item.poem;
      }
    });
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  // ViewChildComponentを取得
  @ViewChildren(ViewChildeComponent) children: QueryList<ViewChildeComponent>;
  // ViewChildComponentの入力値を格納する配列
  poems = ["", "", ""];
}
