import { NgClass, NgStyle } from '@angular/common';
import { Component, HostListener, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgStyle,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navbg:any;

  // fixed black background for navbar
  @HostListener('document:scroll')
  scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color':'#000000'
      }
    }
    else {
      this.navbg = {};
    }
  }
}
