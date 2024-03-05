import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chi-siamo',
  standalone: false,
  /* imports: [CommonModule], */
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.css'
})
export class ChiSiamoComponent {
  octimal(){
    window.location.href = "https://octimal.it/";
  }

  link__1(){
    window.location.href = "https://www.tiktok.com/@memoorables?_t=8iCiZKtRku0&_r=1";
  }

  link__2(){
    window.location.href = "https://www.instagram.com/memoorables/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==";
  }

  link__3(){
    window.location.href = "mailto:memoorables@gmail.com";
  }
  link__4(){
    window.location.href = "https://www.produzionidalbasso.com/project/all-stories-are-memoorables/";
  }

  link__5(){
    window.location.href = "https://www.paypal.me/memoorablesPP?locale.x=it_IT";
  }
  

}