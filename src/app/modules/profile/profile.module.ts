import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { IntroductionComponent } from 'src/app/components/profile/introduction/introduction.component';
import { EducationComponent } from 'src/app/components/profile/education/education.component';
import { WorkComponent } from 'src/app/components/profile/work/work.component';

@NgModule({
  declarations: [
    ProfileComponent,
    IntroductionComponent,
    EducationComponent,
    WorkComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
