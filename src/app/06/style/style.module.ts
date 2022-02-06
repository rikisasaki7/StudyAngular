import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HostComponent } from "./host/host.component";
import { HostContextComponent } from "./host-context/host-context.component";
import { DeepStyleComponent } from "./deep/deep.component";
import { DeepChildComponent } from "./deep/deep-child/deep-child.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HostComponent,
    HostContextComponent,
    DeepStyleComponent,
    DeepChildComponent,
  ],
  exports: [
    HostComponent,
    HostContextComponent,
    DeepStyleComponent,
    DeepChildComponent,
  ],
})
export class StyleModule {}
