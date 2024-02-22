const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
        <div class="container">
            <div class="px-1 py-1">
                <div class="has-background-info mr-1 p-1"> 
                    <div class="is-large p-4">
                        <!-- Row #1 -->
                        <div class="title has-text-light">
                            John Pionzio - Portfolio Documentation
                        </div>
                        
                        <!-- Row #2  -->
                        <div class="box mt-2">
                            

                            <h2 class="subtitle has-text-weight-bold mb-0">
                                Resources
                            </h2>
                            <ul>
                                <li>
                                    Font: <a href=https://fonts.googleapis.com/css2?family=Underdog&display=swap>https://fonts.googleapis.com/css2?family=Underdog&display=swap</a>
                                </li>
                                <li>
                                    Starter Code:
                                    <ul>
                                        <li>
                                            &emsp;<a href=https://people.rit.edu/jjp1723/235/project1/index.html>https://people.rit.edu/jjp1723/235/project1/index.html</a>
                                        </li>
                                        <li>
                                            &emsp;<a href=https://people.rit.edu/jjp1723/330/pionzio-p1/home.html>https://people.rit.edu/jjp1723/330/pionzio-p1/home.html</a>
                                        </li>
                                    </ul> 
                                </li>
                                <li>
                                    Bulma Card Code: <a href=https://bulma.io/documentation/components/card/>https://bulma.io/documentation/components/card/</a>
                                </li>
                            </ul>
                            
                            <br>
                            <h2 class="subtitle has-text-weight-bold mb-0">
                                Noteworthy
                            </h2>
                            <ul>
                                <li>
                                    Mobile Friendly: This project utilized Bulma styleing to create a "mobile-first" application, most evident in the navigation bar, as in screen resolutions under 1024px, it is replaced with a hamburger menu
                                </li>
                                <li>
                                    This web application utilizes Bulma styling to create a mobile-friendly interface that easily adapts to all screen sizes and resolutions.
                                </li>
                            </ul>

                            <br>
                            <h2 class="subtitle has-text-weight-bold mb-0">
                                TO DO
                            </h2>
                            <ol>
                                <li>
                                    Finalize styling
                                </li>
                                <li>
                                    Add Content to Projects Page
                                </li>
                                <li>
                                    Add Content to Contact Page
                                </li>
                            </ol>

                            <br>
                            <h2 class="subtitle has-text-weight-bold mb-0">
                                Initial Portfolio Page
                            </h2>
                            This Portfolio is a recreation of my initial portfolio website I created in my second year at RIT (circa Fall 2020), and is meant to implement additional coding knowlege I have accumulated since then, as well as updating my information. To view my original portfolio, click <a href=https://people.rit.edu/jjp1723/235/project1/index.html>here</a>.
                            <br><br>

                            <h2 class="subtitle has-text-weight-bold mb-0">
                                Changelog
                            </h2>
                            September 4th, 2023: Portfolio First Created.
                            <br>
                            January 10th, 2024: Added new entries to \'Projects\' page for RogueBike, Spooky-Ghost Extravaganza 3, Pirate Wars, Halo Infinite Custom Level, Tank Collection Manager, and Media Uploader; added GitHub link to \'Contact\' page.
                            <br><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

class WCDocumentation extends HTMLElement{
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

customElements.define('wc-documentation', WCDocumentation);