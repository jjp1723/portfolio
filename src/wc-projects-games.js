const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>

<section class="section has-background-dark">
    <div class="container">
        <div class="column">  
            <div class="hero is-large is-light p-2">
                <div class="hero-head">
                    <p class="title p-2">
                        <b>Games</b>
                    </p>
                    <p class="subtitle p-3">
                        Listed from newest to oldest.
                    </p>
                </div>
            </div>

            <br><br>
            
            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/-rBpe4f946o" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Pong</p>
                        <p class="subtitle is-6">Project Type: Personal (Solo)<br>Developed: November February 3rd, 2024 - February 6th, 2024</p>
                        <p>
                            A recreation of the classic game Pong in Unity3D, my version of pong includes several additional features not found in the original game.  One such feature is the ability to switch modes of play between a timed match and a match with a par score, and another feature is the ability to toggle a CPU for player 2.  The third and most significant feature is the addition of special balls with unique properties; one ball is smaller than usual and blends in with the background, another starts moving slowly but quickly builds speed, and a third will repeatedly turn invisible over time.  This game's project files and build have been uploaded to Github, and can be found  <a href="https://github.com/jjp1723/Pong"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>
            
            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/sUPTiLoWDFM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Halo Infinite Custom Level</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 13, 2023 - December 10, 2023</p>
                        <p>
                            A custom campaign-style level created in Halo Infinite\'s forge editor.  The level emulates the structure of Halo campaign levels, with several distinct sections with enemies the player must fight their way through to reach a series of objectives.  The level begins in a very limited section, progressing into a larger section with harder enemies, and ending in a extremely open section that offers the player multiple paths forwards and more series enemies to face; the second and third sections end with the player fighting off a wave of enemies consisting of the strongest enemies they have faced thus far.  This level was playtested among peers and improved in accordance with their feedback to create a level that both is possible for inexperienced players to approach an provides some challenge for veteran Halo players.  A full playthrough of the level can be viewed <a href="https://www.youtube.com/watch?v=sUPTiLoWDFM&list=LL&index=30"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>
            
            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/qgfJSHAI8vA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Brick Game</p>
                        <p class="subtitle is-6">Project Type: Academic (Team)<br>Developed: February 1, 2023 - April 30, 2023</p>
                        <p>
                            A casual game developed using C# in Unity in a series of two-week sprints in a group of four over the course of several month. This game was originally created as 2D physics-launcher game akin to angry birds, but was redesigned after our second sprint when playtesters expressed great enjoyment when trying to bounce the ball off of walls and objects, after which we would gradually alter the game by adding new blocks, changine mechanics, and introducing new ones and new level until the game ended up in its current state.  A 2D physics-based game, Brick Game presents the player with a single object they are able to launch in any given direction at variable velocity. The objective is to reach each level's end goal in a few launches as possible, being careful to avoid any hazards and taking advantage of the level layout to ricochet the ball around corners at high speed. Though simple in concept, this game went through a complete redesign 1/3 of the way through development, with new mechanics and tweaks to existing ones introduced each sprint, with the final build bearing little resemblance to the original. The final build feature 10 unique levels, 100% original sprites made by myself, an original ost, and royalty free sound effects.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/OoFvc8nfv3o" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">RogueBike</p>
                        <p class="subtitle is-6">Project Type: Academic (Group)<br>Developed: November 11, 2021 - December 9, 2021</p>
                        <p>
                            A racing game developed using C# in Unity over one month, with development split into two-week sprints in a group of four. A top-down game that was a hybrid of a traditional racing game and a card-based game, RogueBike starts the player in a race against an AI opponent which they must try to beat in three laps; the player has access to three cards that act as special abilities, which they can utilize to win the race.  All visuals and sound effects in the game are 100% original, with all terrain and obstacle visuals being designed an implemented by myself.  My primary role in this project was development of the visuals, specifically tilesets for terrain and obstacles, and troubleshooting code.  Our team's Trello board can be viewed <a href="https://trello.com/b/9m0JLO0U/roguelike-bike"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/atyuJzAbTl8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Spooky-Ghost Extravaganza 3</p>
                        <p class="subtitle is-6">Project Type: Academic (Group)<br>Developed: September 30, 2021 - October 28, 2021</p>
                        <p>
                            A multiplayer arcade game developed using C# in Unity over one month, with development split into two-week sprints in a group of four. A top-down multiplayer game based around a Holloween theme, Spooky-Ghost Extravaganza 3 (<i>note: this game is not a part of a series, and the \'3\' in the name was an inside joke</i>) starts the players on a street on halloween.  Roaming around the street are multiple trick-or-treaters, which the players must scare to steal their candy, with the objective being to steal the most candy, reflected in an individual score, before the time runs out and to outdo the other player.  The players can improve their effectiveness at by collecting temporary power-ups which spawn around the map, with each augmenting different abilities.  All visuals and sound effects in the game are 100% original, with all character and npc visuals being designed an implemented by myself.  My primary role in this project was development of the visuals, implementing the \'scarred\' status for the npc's, and troubleshooting code.  Our team's Trello board can be viewed <a href="https://trello.com/b/lZwjHz5w/spooky-ghost-extravaganza-3"><b>HERE</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by9" style="margin-left:auto;margin-right:auto;width:100%">
                        <img src="media/Pirates.PNG" alt="Pirates">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Pirate Wars</p>
                        <p class="subtitle is-6">Project Type: Academic (Group)<br>Developed: March 15, 2021 - April 25, 2021</p>
                        <p>
                            A multiplayer tabletop game developed in Tabletop Simulator, with work split into one-week sprints in a group of four. A tabletop multiplayer game, Pirate Wars pits all players against each other, with the objective to be either the last one standing or to be the one who successfully steals the \'Eye of the Kraken\' and delivers it to their respective home base.  Player's start by rolling a dice to determine turn order, which is repeated throughout several rounds, with each turn consisting of three phases, an income phase where players collect a given sum of currency based on how many settlements they conntrol, a spending phase where players can build and deploy new ships or settlement defenses, and movement phase where players can move their ships around the board, chosing to attack other players if they wish.  After a predetermined number of rounds, the Kraken, a neutral npc in the center of the board, will start to damage everything on the board, forcing players to either engage each other or kill the Kraken before then; once the Kraken is killed, its eye can be looted and delivered back to any player's home base to achieve an instant victory.  All assets used were defaults from Tabletop Simulator.  My primary role in this game was the lead designer, as the game concept was my own proposal, and I worked with my team to implement ideas, conduct playtests, and make alterations to the game's rules and balancing when necessary.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/Gf-X2jYKmEw" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Alien Assault</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 6, 2020 - December 5, 2020</p>
                        <p>
                            A browser game developed using JavaScript and PixiJS in conjunction with HTML5 and CSS. An top-down arcade shooter, Alien Assault sees the player as the sole defender of Earth, needing to fend off wave after wave of an alien assault; if too many alien crafts get past the player or collide with them, then its game over! During gameplay, the player will have the opportunity to upgrade their ship every few rounds, as well as reduce lost hitpoint, but beware, for each round will spawn rapidly increasing numbers of enemies, which will eventually overwhelm the player. All visuals in the game, besides the background image, are 100% original, with said image and all sound effects being royalty free. <i>Note: This project was based on an earlier academic assignment called Circle Blast which <b>is</b> included in the development timeline.</i>
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/E7DoxACM7YU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Untitled Dungeon Crawler Game</p>
                        <p class="subtitle is-6">Project Type: Academic (Team)<br>Developed: February 12, 2020 - May 5, 2020</p>
                        <p>
                            A rpg developed using C# in MonoGame and Visual Studio 2019. A first-person dungeon-crawling rpg, Untitled Dungeon Crawler game sees the player start in a random room within a radomly generated dungeon, which they must traverse to find the entrance to the next level of the dungeon. As the player traverses the dungeon, they must be wary of enemies that can be encountered within, which include slimes, goblins, and trolls. Players can also come across chests containing valuable loot which can help them as they progress. Unfortunately, this game's development was hampered greatly by the Covid-19 pandemic, and so several features, including bosses, currency, and shops, had to be cut in order to meet our final submission deadline. All assets are 100% original and made by myself.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/h_H1JT6o0WA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Potato Ninja</p>
                        <p class="subtitle is-6">Project Type: Passion (Team)<br>Developed: October 2017 - May 2018</p>
                        <p>
                            A platforming game developed using GameMaker: Studio (Lite) as a part of a six-member high school club that met on a bi-weekly basis for one hour every Friday. A 2D platforming game, Potato Ninja contains a series of levels the player can complete in any order. Each level of the game was created by a different member of the club, each featuring unique enemies and obstacles. The game also features an online battle mode where players can face off against each other to test their skills. All assets in game are 100% original, and the game is available for free on <a href="https://lucas-acosta-morales.itch.io/potato-ninja"><b>itch.io</b></a>.
                        </p>
                    </div>
                </div>
            </div>

            <br><hr><br>

            <div class="card">
                <div class="card-image">
                    <iframe style="margin:auto;width:100%;height:720px" src="https://www.youtube.com/embed/8os4M6lJyRE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">Battleship Battle</p>
                        <p class="subtitle is-6">Project Type: Academic (Solo)<br>Developed: November 2017 - December 2017</p>
                        <p>
                            A simulator game developed using Alice, a simple block-based programming engine. A simple combat simulation game utilizing a combination of keyboard and mouse controls, Battleship Battle pits the player against a fleet of enemy gunboats and an aircraft carrier equipped with a sqadron of fighter jets, all of which will relentlessly pursue the player, and it is up to said player to defeat them all before getting overwhelmed. Each of the three enemy types behaves slightly differently, with the gunboats prefering to close the distance and sail alongside the player, the fighter jets, launching missiles from point blank range before returning to the carrier to rearm, and the carrier itself prefers to stay at a safe distance. All assets in the game are default Alice assets which have been modified slightly to be more visually fitting to their role in the game.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class WCProjectsGames extends HTMLElement{
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

customElements.define('wc-projects-games', WCProjectsGames);