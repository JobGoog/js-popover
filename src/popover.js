export default class Popover {
    constructor(element, title, content) {
      this.element = element;
      this.title = title;
      this.content = content;
      this.popoverEl = null;
  
      // Привязываем обработчик
      this.element.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  
    createPopover() {
      const container = document.createElement('div');
      container.classList.add('popover-container');
  
      container.innerHTML = `
        <div class="popover-title">${this.title}</div>
        <div class="popover-content">${this.content}</div>
      `;
  
      // Позиционируем относительно элемента
      const { top, left, height } = this.element.getBoundingClientRect();
      container.style.position = 'absolute';
      container.style.top = `${top + height + window.scrollY + 10}px`;
      container.style.left = `${left + window.scrollX}px`;
  
      document.body.appendChild(container);
      this.popoverEl = container;
    }
  
    show() {
      this.createPopover();
    }
  
    remove() {
      if (this.popoverEl) {
        this.popoverEl.remove();
        this.popoverEl = null;
      }
    }
  
    toggle() {
      if (this.popoverEl) {
        this.remove();
      } else {
        this.show();
      }
    }
  }
  