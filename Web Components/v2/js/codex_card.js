class CodexCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="css/codex-card/codex-card.css">
            
            <div class="team_card">
                <div class="card_inner">
                    <div class="front d-flex flex-column align-center justify-center">
                        <img src="${this.getAttribute('avator')}" class="avator" alt="">
                        <h2>${this.getAttribute('title')}</h2>
                        <p>${this.getAttribute('excerpt')}</p>
                        <ul class="socials d-flex align-center">
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon1')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon2')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon3')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon4')}" alt=""></a></li>
                            
                        </ul>
                    </div>
                    <div class="back d-flex flex-column">
                        <img src="${this.getAttribute('avator')}" class="avator" alt="">
                        <h2>${this.getAttribute('title')}</h2>
                        <ul class="contact_info">
                            <li class="d-flex align-center">
                                <div class="image_back d-flex align-center justify-center">
                                    <img src="${this.getAttribute('ph_icon')}" alt="">
                                </div>
                                ${this.getAttribute('ph_no')}
                            </li>
                            <li class="d-flex align-center">
                                <div class="image_back d-flex align-center justify-center">
                                    <img src="${this.getAttribute('email_icon')}" alt="">
                                </div>
                                ${this.getAttribute('email_no')}
                            </li>
                        </ul>
                        <ul class="socials d-flex align-center">
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon1')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon2')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon3')}" alt=""></a></li>
                            <li><a href="" class="d-flex align-center justify-center"><img src="${this.getAttribute('s_icon4')}" alt=""></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}
window.customElements.define('codex-card', CodexCard);

export{};