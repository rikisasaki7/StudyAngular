import { Component } from "@angular/core";

@Component({
  selector: "my-app-host-context",
  templateUrl: "./host-context.html",
  styles: [
    `
      :host-context(.summer-ttttt) p {
        color: #f00
        font-weight: bold;
        background-color: #0ff;
      }
    `,
  ],
})
export class HostContextComponent {
  name = "angularrr";
}
