class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
                text-decoration: none;
            }
            .header {
                display: block;
                height: 70px;
                background: #F9D923;
                color: #B20600;
                padding: 0 20px;
            }
            .logo {
                line-height: 70px;
                float: left;
                text-transform: uppercase;
                padding-left: 25px;
                cursor: pointer;
            }
            nav ul {
                float: right;
                padding-right: 25px;
                font-weight: bold;
            }
            nav ul li {
                display: inline-block;
                line-height: 68px;
            }
            nav ul li a {
                position: relative;
                color: #B20600;
                font-size: 20px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
            }
            nav ul li a:before {
                position: absolute;
                content: '';
                left: 0;
                bottom: -5px;
                height: 3px;
                width: 100%;
                background: #EEEEEE;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .3s linear;
            }
            nav ul li a:hover:before {
                transform: scaleX(1);
                transform-origin: left;
            }
            @media screen and (max-width: 960px) {
                h2 {
                    display: none;
                }
                nav ul {
                    padding: 0 20px;
                }
            }
            </style>
            <div class="header">
                <h1 class="logo">Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                    </ul>
                </nav>
            </div>`;
    }
}

customElements.define('app-bar', AppBar);