import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, FooterComponent]
})
export class HomeComponent {


  ngOnInit(): void {
    const sections = document.querySelectorAll("section");
const images = document.querySelectorAll(".bg");
/* const headings = gsap.utils.toArray(".section-heading"); */
const outerWrappers:any = gsap.utils.toArray(".outer");
const innerWrappers:any = gsap.utils.toArray(".inner");

document.addEventListener("wheel", handleWheel);
document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);

let listening = false,
  direction = "down",
  current: any = "",
  next = 0;

const touch = {
  startX: 0,
  startY: 0,
  dx: 0,
  dy: 0,
  startTime: 0,
  dt: 0
};

const tlDefaults = {
  ease: "slow.inOut",
  duration: 1
};

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });


function slideIn() {
  if (current !== undefined) gsap.set(sections[current], { zIndex: 0 });

  gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
  gsap.set(images[next], { yPercent: 0 });
  const tl = gsap
    .timeline({
      paused: true,
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        current = next;
      }
    })
    .to([outerWrappers[next], innerWrappers[next]], { yPercent: 0 }, 0)
    .from(images[next], { yPercent: 15 }, 0)

  if (current !== undefined) {
    tl.add(
      gsap.to(images[current], {
        yPercent: -15,
        ...tlDefaults
      }),
      0
    ).add(
      gsap
        .timeline()
        .set(outerWrappers[current], { yPercent: 100 })
        .set(innerWrappers[current], { yPercent: -100 })
        .set(images[current], { yPercent: 0 })
        .set(sections[current], { autoAlpha: 0 })
    );
  }

  tl.play(0);
}

function slideOut() {
  console.log(current)
  console.log(next)
  gsap.set(sections[current], { zIndex: 0 });
  gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
  
  gsap.set([outerWrappers[next], innerWrappers[next]], { yPercent: 0 });
  gsap.set(images[next], { yPercent: 0 });

  gsap
    .timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        current = next;
      }
    })
    .to(outerWrappers[current], { yPercent: 100 }, 0)
    .to(innerWrappers[current], { yPercent: -100 }, 0)
    .to(images[current], { yPercent: 15 }, 0)
    .from(images[next], { yPercent: -15 }, 0)
    .set(images[current], { yPercent: 0 });
}

function handleDirection() {
  listening = false;

  if (direction === "down") {
    next = current + 1;
    if (next >= sections.length) next = 0;
    slideIn();
  }

  if (direction === "up") {
    next = current - 1;
    if (next < 0) next = sections.length - 1;
    slideOut();
  }
}

function handleWheel(e:any) {
  if (!listening) return;
  direction = e.wheelDeltaY < 0 ? "down" : "up";
  handleDirection();
}

function handleTouchStart(e:any) {
  if (!listening) return;
  const t = e.changedTouches[0];
  touch.startX = t.pageX;
  touch.startY = t.pageY;
}

function handleTouchMove(e:any) {
  if (!listening) return;
  e.preventDefault();
}

function handleTouchEnd(e:any) {
  if (!listening) return;
  const t = e.changedTouches[0];
  touch.dx = t.pageX - touch.startX;
  touch.dy = t.pageY - touch.startY;
  if (touch.dy > 10) direction = "up";
  if (touch.dy < -10) direction = "down";
  handleDirection();
}

slideIn();
  }

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
    window.location.href = "mailto:${project@memoorables.com}";
  }
  link__4(){
    window.location.href = "https://www.produzionidalbasso.com/project/all-stories-are-memoorables/";
  }

  link__5(){
    window.location.href = "https://www.paypal.me/memoorablesPP?locale.x=it_IT";
  }

}
