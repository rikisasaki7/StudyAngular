import { Component, Input } from "@angular/core";
@Component({
  selector: "my-view-child",
  templateUrl: "./view-child.html",
  styleUrls: ["./view-child.style.css"],
})
export class ViewChildeComponent {
  // インデックス値
  @Input() indexwww: number;

  // テキストボックスの入力値
  poem: string;
}
