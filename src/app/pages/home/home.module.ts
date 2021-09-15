import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {PublicationService} from "../shared/services/publication.service";

const routes: Routes = [
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    PostComponent,
    StoryComponent,
    MessageSenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    PublicationService
  ]
})

export class HomeModule { }