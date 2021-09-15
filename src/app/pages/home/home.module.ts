import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { PublicationService } from "src/app/shared/services/publications.service";
import {SharedMaterialModule} from "../../shared/shared-material.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {StoryComponent} from "./components/story/story.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    PostModule,
    MessageSenderModule
  ],
  providers: [
    PublicationService
  ]
})
export class HomeModule {
}