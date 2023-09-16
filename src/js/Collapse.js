export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  drawUI() {
    const container = document.createElement('div');
    container.classList.add('container');
    this.container.appendChild(container);

    const form = document.createElement('form');
    form.classList.add('form');
    container.appendChild(form);

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Collapse';
    form.appendChild(button);

    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    container.appendChild(textBox);

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = `
        А гренка в нашем ресторане называется крутон. 
        Это точно такой же поджаренный кусочек хлеба. 
        Только гренка не может стоить восемь долларов, а крутон — может.`;
    textBox.appendChild(text);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copy';
    container.appendChild(footer);
  }

  init() {
    this.drawUI();
    this.toAnimate();
  }

  toAnimate() {
    const button = document.querySelector('.button');
    const textBox = document.querySelector('.text-box');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      textBox.classList.toggle('animation');
    });
  }
}
