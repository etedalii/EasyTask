import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //setable from outside
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({required: true}) id!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() selectedUser = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id); // Emits the 'id' as a string
  }
}
