const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
    <div class="container">
        <div class="column">  
            <div class="hero is-large is-light p-3">
                <div class="hero-head">
                    <p class="title">
                        Game Developer Resume
                    </p>
                    
                <embed src="media/Resume-Game-Developer.pdf" style="width:100%;height:1080px"/>
                <br>
                <a class="button" href="media/Resume-Game-Developer.pdf" target="_blank">View and Download - <b>Game Developer Resume</b> - as PDF</a>
                </div>
            </div>
            <br><hr><br>
            <div class="hero is-large is-light p-3">
                <div class="hero-head">
                    <p class="title">
                        Software Engineer Resume
                    </p>
                    
                <embed src="media/Resume-Software-Engineer.pdf" style="width:100%;height:1080px"/>
                <br>
                <a class="button" href="media/Resume-Software-Engineer.pdf" target="_blank">View and Download - <b>Software Engineer Resume</b> - as PDF</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class WCResume extends HTMLElement{
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

customElements.define('wc-resume', WCResume);