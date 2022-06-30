class YoutubeApi extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
        <div class="main_app">
            <div class="head d-flex align-center justify-between">
                <div href="" class="logo d-flex align-center">
                    <img src="images/codex_rahul.png" alt="">
                    <div>
                        <h1>CODEX RAHUL</h1>
                        <div class="subscribe_button d-flex flex-column">
                            <a href="" class="d-flex align-center">
                                <i class="fab fa-youtube"></i>
                                SUBSCRIBE
                            </a>
                            <b id="subCount"></b>
                        </div>
                    </div>
                
                </div>
                <div class="right d-flex align-center justify-center" onclick="button_click()">
                    <span class="icon fas fa-sun"></span>
                    <span class="icon fas fa-moon"></span>
                </div>
            </div>
            <div class="video_section" id="video"></div>
            <ul class="video_list_section"></ul>
        </div>
        `;
    }
}

window.customElements.define('youtube-api', YoutubeApi);