const scrollUp = {
    el: document.querySelector('.scroll'),
    show() {
      this.el.classList.remove('scroll_hide');
    },
    hide() {
      this.el.classList.add('scroll_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.scroll').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  scrollUp.addEventListener();