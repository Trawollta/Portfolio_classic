import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  
  constructor() { }

  
  ngOnInit() {
    // const textElements =document.querySelectorAll('.typing-animation');
    // textElements.forEach((element, index) => {
    //   const text = element.textContent || '';
    //   element.textContent = '';
    //   if (!element.classList.contains('text-visible')) {
    //     element.classList.add('text-visible');
    //     this.typeWriterEffect(element, text, 0, index * 2000);
    //   }
    // });
  }
  
  // typeWriterEffect(element: Element, text: string, index: number, delay: number) {
  //   setTimeout(() => {
  //     if (index < text.length) {
  //       element.textContent += text.charAt(index);
  //       index++;
  //       setTimeout(() => this.typeWriterEffect(element, text, index, 0), 50);
  //     }
  //   }, delay);
  // }
}
