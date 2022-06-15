class ContactBar extends HTMLElement {
    constructor () {
        super ();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback () {
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
            .contact-me {
                background-color: #F9D923;
                height: 70vh;
                text-align: center;
                display: flex;
                padding: 15px 10px;
                justify-content: center;
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
            
            .contact-me .wrapper-contact input, .wrapper-contact textarea {
                width: 100%;
                height: 30px;
                border: none;
                border-radius: 15px;
                padding: 10px 15px;
                margin-bottom: 18px;
            }
            
            .contact-me .wrapper-contact textarea {
                height: 120px;
            }
            
            input, textarea {
                outline: none;
            }
            
            .contact-me .wrapper-contact input[type="submit"] {
                color: black;
                text-transform: uppercase;
                border-radius: 11px;
                padding: 10px 60px;
                border: 5px solid black;
                border-top: none;
                border-left: none;
                border-right: none;
                display: inline-block;
                background: #feda5f;
                padding-bottom: 23px;
                width: auto;
                cursor: pointer;
            }
            @media screen and (max-width: 960px){
                .contact-me {
                    width: 100%;
                    height: 80vh;
                }
            }            
        </style>
        <div class="contact-me">
            <div class="container">
                <div class="heading">
                    <h2>Contact</h2>
                </div>
                <div class="wrapper-contact">
                    <form action="">
                        <input type="text" placeholder="Nama Lengkap Anda">
                        <input type="email" placeholder="Email Anda">
                        <textarea cols="30" rows="10" placeholder="Masukkan Pesan Anda"></textarea>
                        <input type="submit" value="Kirim">
                    </form>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('contact-bar', ContactBar);