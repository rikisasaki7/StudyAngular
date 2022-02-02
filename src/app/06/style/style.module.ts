import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HostComponent } from "./host/host.component";
import { HostContextComponent } from "./host-context/host-context.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HostComponent, HostContextComponent],
  exports: [HostComponent, HostContextComponent],
})
export class StyleModule {}
