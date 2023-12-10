import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

const moduleArr = [MatExpansionModule];
@NgModule({
  imports: [moduleArr],
  exports: [moduleArr],
})
export class MaterialModule {}
