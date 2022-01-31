import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
@Component({
  selector: "my-lifecycle-child",
  templateUrl: "./lifecycle-child.html",
  styleUrls: ["./lifecycle-child.style.css"],
})
export class LifecycleChildComponent
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
  @Input() time: Date;

  constructor() {
    console.log("[child]constructor");
  }

  // ライフサイクルメソッド
  ngOnInit(): void {
    console.log("[child]ngOnInit");
  }

  // ngOnChanges(): void {
  //   console.log("[child]ngOnChanges");
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("[child]ngOnChanges");
    // すべての変更を順に取得
    for (let prop in changes) {
      let change = changes[prop];
      console.log(`${prop}: ${change.previousValue} => ${change.currentValue}`);
    }
  }

  ngDoCheck(): void {
    console.log("[child]ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("[child]ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("[child]ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("[child]ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("[child]ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("[child]ngOnDestroy");
  }
}
