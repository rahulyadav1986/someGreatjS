export class CodexCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="css/codex-card/codex-card.css">
            <div class="card">
                <div class="flip_box_inner">
                    <div class="front">
                        <img src="${this.getAttribute('avator')}" alt="">
                        <div class="front-details d-flex flex-column justify-end">
                            <div>
                                <h2>${this.getAttribute('title')}</h2>
                                <p>${this.getAttribute('excerpt')}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="back">
                        <div class="icon">
                            <img src="${this.getAttribute('address-icon')}" alt="" >
                        </div>
                        <p>${this.getAttribute('description')}</p>
                        <ul class="address">
                            <li class="d-flex align-center">
                                <i class="fas fa-map-marked-alt"></i>
                                ${this.getAttribute('address')}
                            </li>
                            <li class="d-flex align-center">
                                <i class="fas fa-blender-phone"></i>
                                ${this.getAttribute('phno')}
                            </li>
                            <li class="d-flex align-center">
                                <i class="fas fa-envelope-open"></i>
                                ${this.getAttribute('email')}
                            </li>
                            <li class="d-flex align-center social">
                                <a href="" class="d-flex align-center justify-center facebook"><i class="fa fa-facebook"></i></a> 
                                <a href="" class="d-flex align-center justify-center twitter"><i class="fa fa-twitter"></i></a> 
                                <a href="" class="d-flex align-center justify-center youtube"><i class="fa fa-youtube"></i></a> 
                                <a href="" class="d-flex align-center justify-center instagram"><i class="fa fa-instagram"></i></a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        `;
    }
}

window.customElements.define('codex-card', CodexCard);