import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './wrapper/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./wrapper/wrapper.module').then((m) => m.WrapperModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
