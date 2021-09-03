import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: []
})
export class HomeModule {}
