class AutoTyper {
    constructor(elementId, textArray, typingSpeed = 100, erasingSpeed = 50, delayBetweenWords = 2000, loop = true) {
      this.element = document.getElementById(elementId);
      this.textArray = textArray;
      this.typingSpeed = typingSpeed;
      this.erasingSpeed = erasingSpeed;
      this.delayBetweenWords = delayBetweenWords;
      this.loop = loop;
      this.currentTextIndex = 0;
      this.currentCharIndex = 0;
      this.isErasing = false;
      this.typing();
    }
  
    typing() {
      const currentText = this.textArray[this.currentTextIndex];
      if (this.isErasing) {
        this.element.textContent = currentText.substring(0, this.currentCharIndex--);
        if (this.currentCharIndex < 0) {
          this.isErasing = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
          setTimeout(() => this.typing(), this.delayBetweenWords);
        } else {
          setTimeout(() => this.typing(), this.erasingSpeed);
        }
      } else {
        this.element.textContent = currentText.substring(0, this.currentCharIndex++);
        if (this.currentCharIndex > currentText.length) {
          if (this.loop) {
            this.isErasing = true;
            setTimeout(() => this.typing(), this.delayBetweenWords);
          }
        } else {
          setTimeout(() => this.typing(), this.typingSpeed);
        }
      }
    }
  }
  
  // Example Usage:
  document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Welcome To ", "My Portfolio", "Enjoy"];
    new AutoTyper("autoTypeElement", texts, 100, 100, 100, true);
  });
  

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element, index) => {
        setTimeout(() => {
            element.classList.add('scroll-in');
        }, index * 50); // 200ms delay between each element's reveal
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scroll-in');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el, index) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el, index);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial call
    handleScrollAnimation();
});
const videos = [
  "project1.mp4",
  "project2.mp4",
  "project3.mp4"
];

let currentVideoIndex = 0;

function changeVideo(direction) {
  currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
  document.getElementById('projectVideo').src = videos[currentVideoIndex];
}
