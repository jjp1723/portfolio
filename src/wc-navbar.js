const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<nav class="navbar has-shadow is-white">
    <!-- logo / brand -->
    <div class="navbar-brand">
        <a class="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>

    <div class="navbar-menu" id="nav-links">
        <div id="nav-bar" class="navbar-start">
            <a id="about" class="navbar-item is-hoverable" href="about.html">
                About
            </a>
        
            <a id="resume" class="navbar-item is-hoverable" href="resume.html">
                Resume
            </a>
        
            <a id="projects" class="navbar-item is-hoverable" href="projects.html">
                Projects
            </a>
            
            <a id="contact" class="navbar-item is-hoverable" href="contact.html">
                Contact
            </a>
        
            <a id="documentation" class="navbar-item is-hoverable" href="documentation.html">
                Documentation
            </a>
        </div> <!-- end navbar-start -->
    </div>
</nav>
`;

class WCNavbar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){ 
        this.burgerIcon = this.shadowRoot.querySelector('#burger');
        this.navbarMenu = this.shadowRoot.querySelector('#nav-links');
        this.burgerIcon.addEventListener('click', () => {
            this.navbarMenu.classList.toggle('is-active');
        });
        //this.render();
    }

    disconnectedCallback(){
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        this.render();
    }

    static get observedAttributes(){
        return ["data-page"];
    }

    render(){
        const currentPage = this.getAttribute('data-page') ? this.getAttribute('data-page') : "Nothing";
        if(currentPage) this.removeLink(currentPage);
        //console.log(this.shadowRoot.querySelector("#nav-bar").innerHTML);
    }

    removeLink(currentPage)
    {
        switch(currentPage)
        {
            // case "Home":
            //     this.shadowRoot.querySelector("#home").removeAttribute("href");
            //     this.shadowRoot.querySelector("#home").className = "navbar-item has-text-weight-bold";
            //     console.log(this.shadowRoot.querySelector("#home").className);
            //     break;
                
            // case "App":
            //     this.shadowRoot.querySelector("#app").removeAttribute("href");
            //     this.shadowRoot.querySelector("#app").className = "navbar-item has-text-weight-bold";
            //     break;

            // case "Favorites":
            //     this.shadowRoot.querySelector("#favorites").removeAttribute("href");
            //     this.shadowRoot.querySelector("#favorites").className = "navbar-item has-text-weight-bold";
            //     break;

            // case "Community":
            //     this.shadowRoot.querySelector("#community").removeAttribute("href");
            //     this.shadowRoot.querySelector("#community").className = "navbar-item has-text-weight-bold";
            //     break;

            // case "Documentation":
            //     this.shadowRoot.querySelector("#documentation").removeAttribute("href");
            //     this.shadowRoot.querySelector("#documentation").className = "navbar-item has-text-weight-bold";
            //     break;

            case "About":
                this.shadowRoot.querySelector("#nav-bar").innerHTML = `
                    <span class="navbar-item has-text-weight-bold">
                        About
                    </span>
                
                    <a id="resume" class="navbar-item is-hoverable" href="resume.html">
                        Resume
                    </a>
                
                    <a id="projects" class="navbar-item is-hoverable" href="projects.html">
                        Projects
                    </a>
                    
                    <a id="contact" class="navbar-item is-hoverable" href="contact.html">
                        Contact
                    </a>
                
                    <a id="documentation" class="navbar-item is-hoverable" href="documentation.html">
                        Documentation
                    </a>
                `;
                break;
                
            case "Resume":
                this.shadowRoot.querySelector("#nav-bar").innerHTML = `
                    <a id="home" class="navbar-item is-hoverable" href="about.html">
                        About
                    </a>
        
                    <span class="navbar-item has-text-weight-bold">
                        Resume
                    </span>
                
                    <a id="projects" class="navbar-item is-hoverable" href="projects.html">
                        Projects
                    </a>
                    
                    <a id="contact" class="navbar-item is-hoverable" href="contact.html">
                        Contact
                    </a>
                
                    <a id="documentation" class="navbar-item is-hoverable" href="documentation.html">
                        Documentation
                    </a>
                `;
                break;

            case "Projects":
                this.shadowRoot.querySelector("#nav-bar").innerHTML = `
                    <a id="home" class="navbar-item is-hoverable" href="about.html">
                        About
                    </a>

                    <a id="resume" class="navbar-item is-hoverable"  href="resume.html">
                        Resume
                    </a>
                
                    <span class="navbar-item has-text-weight-bold">
                        Projects
                    </span>
                    
                    <a id="contact" class="navbar-item is-hoverable" href="contact.html">
                        Contact
                    </a>
                
                    <a id="documentation" class="navbar-item is-hoverable" href="documentation.html">
                        Documentation
                    </a>
                `;
                break;

            case "Contact":
                this.shadowRoot.querySelector("#nav-bar").innerHTML = `
                    <a id="home" class="navbar-item is-hoverable" href="about.html">
                        About
                    </a>

                    <a id="resume" class="navbar-item is-hoverable"  href="resume.html">
                        Resume
                    </a>
                
                    <a id="projects" class="navbar-item is-hoverable" href="projects.html">
                        Projects
                    </a>
                    
                    <span class="navbar-item has-text-weight-bold">
                        Contact
                    </span>
                
                    <a id="documentation" class="navbar-item is-hoverable" href="documentation.html">
                        Documentation
                    </a>
                `;
                break;

            case "Documentation":
                this.shadowRoot.querySelector("#nav-bar").innerHTML = `
                    <a id="home" class="navbar-item is-hoverable" href="about.html">
                        About
                    </a>

                    <a id="resume" class="navbar-item is-hoverable"  href="resume.html">
                        Resume
                    </a>
                
                    <a id="projects" class="navbar-item is-hoverable" href="projects.html">
                        Projects
                    </a>
                    
                    <a id="contact" class="navbar-item is-hoverable" href="contact.html">
                        Contact
                    </a>
                
                    <span class="navbar-item has-text-weight-bold">
                        Documentation
                    </span>
                `;
                break;
            
            default:
                console.log("No Page Detected");
                break;
        }
    }
}

customElements.define('wc-navbar', WCNavbar);