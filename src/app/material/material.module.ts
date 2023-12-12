import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const moduleArr = [MatExpansionModule,MatFormFieldModule,MatInputModule];
@NgModule({
  imports: [moduleArr],
  exports: [moduleArr],
})
export class MaterialModule {}
