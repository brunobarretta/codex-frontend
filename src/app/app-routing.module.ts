import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpnjComponent } from './pages/cpnj/cpnj.component';
import { TodoComponent } from './pages/todo/todo.component';
import { WorldClockComponent } from './pages/world-clock/world-clock.component';

const routes: Routes = [
  { path: 'cnpj', component: CpnjComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'world-clock', component: WorldClockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
