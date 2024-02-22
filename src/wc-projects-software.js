const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
    <div class="container">
        <div class="column">  
            <div class="hero is-large is-light p-2">
                <div class="hero-head">
                    <p class="title p-2">
                        <b>Software</b>
                    </p>
                    <p class="subtitle p-3">
                        Listed from newest to oldest.
                    </p>
                </div>
            </div>

            <br><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/K53fUpgT4l4" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Media Uploader</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 27, 2023 - December 11, 2023</p>
                        <p>
                            A web application created utilizing Node.js, React.js, Mongoose, Redis, Gulp, SCSS, and Git using JavaScript, Handlebars, and CSS.  Media Uploader requires users to sign in or sign up to the site before use, after which they can upload images to the site that will be stored in a database and can be viewed by the user.  Users can add descriptions to their images at the time of upload and set their visibility status to either \'private\' or \'public\', which affects whether or not the image will be visible on the application\'s \'Explore\' page.  Users can toggle the visibility of their images or delete them from the main \'App\' page and view all public images uploaded by any user on the \'Explore\' page; users can change their password or delete their account from the account page.  This application also implements a proof-of-concept monetization system where users have a limit to the total amount of storage available to them in the site\'s database, which can be increased by  \'subscribing\' to the premium system on the \'Account\' page.  The deployed application on Heroku can be found <a href="https://project-2-jjp1723-951b338cd691.herokuapp.com"><b>HERE</b></a> (<i>if the application doesn't load, it means the Redis account associated has expired - please message me via one of my contacts to update it</i>), and the GitHub repository for this project can be found <a href="https://github.com/jjp1723/430-project-2"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by8" style="margin-left:auto;margin-right:auto">
                    <img src="media/Tank-Collection.PNG" alt="Tank Collection">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Tank Collection Manager</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: October 6, 2023 - October 17, 2023</p>
                        <p>
                            A web application created utilizing Node.js and Git using Javascript, and HTML.  Tank Collection Manager allows users to create a collection of tanks by creating a new entry for each tank; each entry requires a name, nation of origin, year designed, and number produced, with optional fields for a description and image url.  Once entries have been added to the collection, they can be sorted in order of each of required fields and be viewed on the \'Collection\' page.  The GitHub repository for this project can be found <a href="https://github.com/jjp1723/430-project-1"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/Z0MT5y2GhEY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Amiibo Finder (Android Application)</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: April 7, 2023 - May 4, 2023</p>
                        <p>
                            A mobile application created for android utilizing the <a href="https://amiiboapi.com">Amiibo API</a>, and was developed using Dart and Flutter. Amiibo Finder allows users to search for a variety of amiibos by name and view additional information about any individual amiibo, including its amiibo series, game series, model number, and release date across multiple regions. Users can \'favorite\' an amiibo, and favorited amiibos can be viewed on a \'Favorites\' screen; users can also view all amiibos that have been \'favorited\' by different app users, including as well as the number of times it has been \'favorited\'.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/-9e2bfjkBVw" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Star Wars Audio Visualizer</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 10, 2022 - December 11, 2022</p>
                        <p>
                            A web application created utilizing the <i>Canvas</i> and <i>Audio</i> JavaScript libraries, and was developed using JavaScript and HTML5, with <i>Bulma</i> for styling. Allows users to play various Star Wars audio tracks from a provided playlist, with the track selected altering many visual elements and theming in the visualizer. Users can further customize their experience through various options provided to them so that they can tailor their experience to their own tastes.  Please not that the visual effects were not captured properly in the demo video due to technological limitations; to view effects properly, as well as experience the application yourself, the app can be accessed <a href="https://people.rit.edu/jjp1723/330/pionzio-p2/app.html"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/c3ajklA9t6c" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Amiibo Finder (Web Application)</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: September 27, 2022 - October 23, 2022</p>
                        <p>
                            A web application created utilizing the <a href="https://amiiboapi.com">Amiibo API</a>, and was developed using JavaScript and HTML5, with <i>Bulma</i> for styling. Amiibo Finder allows user to search for a variety of amiibos by name and view additional information about any individual amiibo, including its amiibo series, game series, model number, and release date across multiple regions. Users can \'favorite\' an amiibo, and favorited amiibos can be viewed on the \'Favorites\' page; users can also view all amiibos that have been \'favorited\' by different app users, including as well as the number of times it has been \'favorited\' on the \'Community\' page. The app can be accessed <a href="https://people.rit.edu/jjp1723/330/pionzio-p1/app.html"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by8" style="margin-left:auto;margin-right:auto;">
                    <img src="media/Dog-Finder.PNG" alt="Dog Finder">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Dog Finder</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 6, 2020 - November 20, 2020</p>
                        <p>
                            A web application created utilizing the <a href="https://dog.ceo/dog-api/documentation/">Dog API</a>, and was developed using JavaScript and HTML5, with CSS framework for styling. Dog Finder allows users to search for pictures of various dog breeds, all of which are displayed to the user in a drop-down menu whic is populated with breed names directly from the API. Users can \'favorite\' change the amount of results displayed as well as change between pages of results if enough results are returned to require multiple pages. The app can be accessed <a href="https://people.rit.edu/jjp1723/235/project2/dog-finder.html"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class WCProjectsSoftware extends HTMLElement{
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

customElements.define('wc-projects-software', WCProjectsSoftware);