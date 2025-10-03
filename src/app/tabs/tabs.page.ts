import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, imagesOutline, personCircleOutline, chatbubblesOutline,logoUsd } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, imagesOutline, personCircleOutline, chatbubblesOutline, logoUsd });
  }
}
