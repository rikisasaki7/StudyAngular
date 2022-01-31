import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LifecycleComponent } from "./lifecycle.component";
import { LifecycleChildComponent } from "./lifecycle-child/lifecycle-child.component";
import { ViewChildeComponent } from "./view-child/view-child.component";
import { ContentComponent } from "./content/content.component";
import { MultiContentComponent } from "./content-multi/content-multi.component";
import { ParentComponent } from "./parent-child/parent.component";
import { PChildComponent } from "./parent-child/p-child/p-child.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    LifecycleComponent,
    LifecycleChildComponent,
    ViewChildeComponent,
    ContentComponent,
    MultiContentComponent,
    ParentComponent,
    PChildComponent,
  ],
  exports: [
    LifecycleComponent,
    LifecycleChildComponent,
    ViewChildeComponent,
    ContentComponent,
    MultiContentComponent,
    ParentComponent,
    PChildComponent,
  ],
})
export class LifecycleModule {}
