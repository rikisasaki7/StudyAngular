import { Component } from "@angular/core";

@Component({
  selector: "my-app-host",
  templateUrl: "./host.html",
  styles: [
    `
      :host(.disableeee) {
        display: block;
        border: 1px double Red;
        background-color: Yellow;
      }
    `,
  ],
})
export class HostComponent {
  name = "Angular";
}
