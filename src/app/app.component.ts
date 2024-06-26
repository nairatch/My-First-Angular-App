import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  name = 'Application';
  readonly imageDetails = {
    src: 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png',
    alt: 'random title',
  };

  readonly names: string[] = [
    'Try',
    'Attempt',
    'Practice',
    'Application',
    'Lesson',
  ];

  ngOnInit(): void {
    //const name = document.querySelector('span.name');
    //if (name) {
    //  name.innerHTML = this.name;
    //}
    //
    //setTimeout (() => {
    //  this.name ="test";
    //}, 5000);
  }
resetImage () {
  this.imageDetails.src = 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png';
}
  updateName() {
    let randomName = this.names[Math.floor(Math.random() * this.names.length)];
    this.name = randomName;
    while (randomName === this.name) {
      randomName = this.names[Math.floor(Math.random() * this.names.length)];
    }
    this.name = `${randomName[0].toUpperCase()}${randomName.slice(1)}`;
  }
  onImageChange(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.imageDetails.src = target.value;
  }
  }

