export class Codexrahul extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="custom_portion.css">
        <div class="portion">
            <img src="${this.getAttribute('imgurl')}" >
            <h2>${this.getAttribute('name')}</h2>
            <p>${this.getAttribute('drescription')}</p>
        </div>`;
    }
}


window.customElements.define('codex-rahul', Codexrahul);