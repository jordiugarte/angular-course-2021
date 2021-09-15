import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { PostComponent } from "./components/post/post.component";
import { StoryComponent } from "./components/story/story.component";
import { MessageSenderComponent } from "./components/message-sender/message-sender.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { PublicationService } from "src/app/shared/services/publications.service";
import { NgModule } from "@angular/core";


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