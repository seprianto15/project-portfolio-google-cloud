class SkillBar extends HTMLElement {
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
            .container {
                max-width: 1170px;
                width: 100%;
                padding: 0 20px;
                margin: 0 auto;
            }
            .heading h2 {
                color: #B20600;
                padding-top: 40px;
                padding-bottom: 20px;
                font-size: 40px;
                text-transform: uppercase;
                text-shadow: 0 1px 0px black;
                display: inline-block;
            }
            .wrapper {
                height: 70vh;
                padding-top:30px;
                padding-bottom:30px;
                text-align: center;
            } 
            .content {
                float: left;
                width: 33.3%;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
            }
            
            .icon {
                position: relative;
            }
            .icon img {
                width: 70%;
                height: 30vh;
                cursor: pointer;
            }
            
            .icon h2 {
                color: black;
                font-size: 20px;
                text-transform: uppercase;
                text-shadow: 0 1px 0px #B20600;
            }
            @media screen and (max-width: 960px){
                .icon h2 {
                    font-size: 10px;
                }
                .icon img {
                    width: 100%;
                }
            }            
        </style>
        <div class="wrapper">
            <div class="container">
                <div class="heading">
                    <h2>Skill</h2>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src= "https://storage.googleapis.com/images-project/logistik.jpg">
                        <h2>Logistic</h2>
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src= "https://storage.googleapis.com/images-project/javascript.png">
                        <h2>JavaScript</h2>
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src= "https://storage.googleapis.com/images-project/microsoft.png">
                        <h2>Microsoft Office</h2>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('skill-bar', SkillBar);