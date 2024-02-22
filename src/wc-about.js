const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
    <div class="container">
        <div class="column">  
            <div class="hero is-large is-info p-2">
                <div class="hero-head">
                    <p class="title p-3">
                        John Pionzio - About Me
                    </p>
                    <img class="p-3" style="float:left;width:50%" src="media/myphoto.jpg" alt="My Photo">
                    <p class="subtitle">
                        About Me
                    </p>
                    <p style="float:right;width:50%">
                    My name is John Pionzio, and I live on the edge of the greater Philadelphia area, in Doylestown Pennsylvania.  I am an aspiring Game and Software Developer currently enrolled at Rochester Institute of Technology, and will be graduating in Spring 2024 after finishing my classes in December 2023.  I've had an affinity for video games ever since I was very young, and continue to find enjoyment in them to this day.  RIT has given me the opportunity to learn the important processes that drive game development, and has given me the knowledge necessary to develop both games and software in multiple languages and in multiple engines.  In my time ar RIT, I've grown profficient in using C#, C++, HTML5, Java, JavaScript, Cascading Style Sheets (CSS), Dart, Flutter, Git, Unity, Visual Studio, Visual Studio Code, and Monogame. I have also been familiarized with using Maya, Unreal Engine 5, Adobe Photoshop, and Adobe Illustrator.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class WCAbout extends HTMLElement{
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

customElements.define('wc-about', WCAbout);