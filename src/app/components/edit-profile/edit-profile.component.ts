import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  selectedPreference: string | undefined;

  onPreferenceChange() {
     this.selectedPreference = (<HTMLInputElement>document.getElementById("preferencia")).value;
  }
}
