import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './webcomponents/documentation/documentation';
const routes: Routes = [
  {
		path: 'documentation',
		component: DocumentationComponent
  },
  {
		path: '',
		redirectTo: '/documentation',
		pathMatch: 'full'
	},
  {
		path: '404',
		redirectTo: '/documentation',
		pathMatch: 'full'
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
