import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./wrapper/wrapper.module').then((m) => m.WrapperModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
