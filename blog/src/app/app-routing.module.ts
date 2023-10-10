import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post/:post_slug', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
