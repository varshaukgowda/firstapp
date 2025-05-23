// import { Component,signal,computed } from '@angular/core';
import { Component,Input } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor (Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //  imagePath = computed(() =>'assets/users/' + this.selectedUser().avatar)

  //  get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  //  }
  @Input() avatar!:string;
  @Input() name!:string;

   get imagePath(){
    return 'assets/users/' + this.avatar
   }
   onSelectUser(){
    console.log('clicked!');
    // const randomIndex = Math.floor (Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser=DUMMY_USERS[randomIndex];
   }
 
}
