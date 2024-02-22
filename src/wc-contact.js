const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
    <div class="container">
        <div class="column">  
            <div class="hero is-large is-info p-2">
                <div class="hero-head">
                    <p class="title p-3 mb-6">
                        John Pionzio - My Contact Information
                    </p>
                    <div class="box">
                        <ul class="p-4">
                            <li class="subtitle has-text-black">School Email (Prefered):&emsp; jjp1723@g.rit.edu</li>
                            <li class="subtitle has-text-black">Personal Email:&emsp;&emsp;&emsp;&emsp;&emsp;jjpnnnn@gmail.com</li>
                            <li class="subtitle has-text-black">Phone #:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (267)-247-6778</li>
                            <li class="subtitle has-text-black">LinkedIn:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <a href="https://www.linkedin.com/in/john-pionzio/"><u>https://www.linkedin.com/in/john-pionzio/</u></a></li>
                            <li class="subtitle has-text-black">GitHub:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <a href="https://github.com/jjp1723"><u>https://github.com/jjp1723</u></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class WCContact extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){ 
        this.render();
    }

    disconnectedCallback(){
        this.onclick = null;
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        this.render();
    }

    static get observedAttributes(){
        return;
    }

    render(){
        
    }
}

customElements.define('wc-contact', WCContact);