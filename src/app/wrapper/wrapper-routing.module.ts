import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,children:[
      {
        path: '',
        loadChildren: () =>
          import('./../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'tech-stacks',
        loadChildren: () =>
          import('./../modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./../modules/projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./../modules/contact/contact.module').then((m) => m.ContactModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
