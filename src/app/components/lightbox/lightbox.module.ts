import { Lightbox } from './lightbox.service';
import { LightboxComponent } from './lightbox.component';
import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LightboxOverlayComponent, LightboxComponent],
  providers: [Lightbox, LightboxConfig, LightboxEvent, LightboxWindowRef],
  entryComponents: [LightboxOverlayComponent, LightboxComponent],
  imports: [FontAwesomeModule],
})
export class LightboxModule {}
