import { Component } from '@angular/core';
import { ActionsBarComponent } from '../shell/actions-bar/actions-bar.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [ActionsBarComponent],
  templateUrl: './main-screen.component.html',
})
export class MainScreenComponent {

}
