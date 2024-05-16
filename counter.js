class Counter extends HTMLElement {
  /**
    * @type { number }
    */
  #count;
  /**
    * @type { HTMLElement }
    */
  #countSpan;
  
  constructor() {
    super();
    console.log("Constructor called");
  }

  #render() {
    this.innerHTML = `
      <section>
        <output>Count: <span>0</span></output>
        <button type="button" data-action="increment">Increment</button>
        <button type="button" data-action="decrement">Decrement</button>
      </section>
    `;
  }

  connectedCallback() {
    console.log("x-counter connected");
    this.#render();
    
    const incBtn = document.querySelector("[data-action='increment']");
    const decBtn = document.querySelector("[data-action='decrement']");

    this.#countSpan = document.querySelector("section > output > span");
    const parsed = parseInt(this.#countSpan.textContent);
    this.#count = isNaN(parsed) ? 0 : parsed;

    incBtn.addEventListener("click", () => {
      this.#count++; 
      this.#countSpan.textContent = this.#count.toString();
    }); 
    
    decBtn.addEventListener("click", () => {
      this.#count--; 
      this.#countSpan.textContent = this.#count.toString();
    }); 
  }

  disconnectedCallback() {
    console.log("x-counter disconnected");
  } 
}

customElements.define("x-counter", Counter);
