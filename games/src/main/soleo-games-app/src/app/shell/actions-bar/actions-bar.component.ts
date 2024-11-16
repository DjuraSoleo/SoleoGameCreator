import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './actions-bar.component.html',
})
export class ActionsBarComponent {

}
