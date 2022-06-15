class ProfileBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
                text-decoration: none;
            }
            .top-wrapper {
                background-image: url("https://storage.googleapis.com/be-your-self/topwrapper.jpg");
                background-repeat: no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
                height: 100vh;
                box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.9);
                text-align: center;
                width: 100%;
                display: flex;
                flex: auto;
            }
            .profile {
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .profile .foto {
                width: 50%;
                border-radius: 50%;
                border: 6px solid #F9D923;
                box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.9);
                cursor: pointer;
                position: relative;
            }
            .profile h2 {
                color: #F9D923;
                font-size: 20px;
                text-transform: uppercase;
                text-shadow: 0 2px 0px black;
                padding-top: 10px;
            }
            .profile h3 {
                padding-top: 10px;
                color: #F9D923;
                font-size: 16px;
                text-transform: uppercase;
                text-shadow: 0 2px 0px black;
            }
            @media screen and (max-width: 960px){
                .top-wrapper {
                    width: 100%;
                    padding: 140px 0 140px 0;
                }
                .top-wrapper h2 {
                    font-size: 12px;
                }
                .top-wrapper h3 {
                    font-size: 10px;
                }
            }
        </style>
        <div class="top-wrapper">
            <div class="profile">
                <img class="foto" src="https://storage.googleapis.com/be-your-self/sepri.png">
                <h2>Seprianto Ray Roganda Sianipar</h2>
                <h3>Gateway Operation Agent</h3>
            </div>
        </div>`;
    }
}

customElements.define('profile-bar', ProfileBar);