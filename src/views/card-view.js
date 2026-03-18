import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/mainStyles.css?inline';
import cardViewStyles from '../styles/viewStyles/card-view.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../utils/icons.js'
/* --- ICONS --- */

export class CardView extends LitElement{
    static properties = {
        passEjemplo: { type: String },
    };
    
    constructor(){
        super();
        this.passEjemplo = '*9-c6Y249R4.@J:q_4YLwn';
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(cardViewStyles)}`,
    ]

    render(){
        return html`
            <section class="card-container d-flexx d-col">
                <div class="title-card-container card-container-general">
                    <h3 class="title-card d-flexx">${unsafeHTML(icons.key)} PASSWORD GENERATOR</h3>
                    <small class="d-flexx mono-font">SECURE PASSWORD GENERATOR</small>
                </div>

                <div class="pass-shower marked-inner-container card-container-general">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">CURRENT PASSWORD</small>
                        <small class="mono-font">22 chars</small>
                    </span>
                    <p class="text-pass-shower">*9-c6Y249R4.@J:q_4YLwn</p>
                </div>

                <div class="strong-visualizer card-container-general">
                    <div class="container-strong-bars d-flexx d-row">
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                    </div>
                    <small class="text-strong-bar mono-font">STRONG</small>
                </div>

                <button class="btn-gen btn-pri d-flexx">${unsafeHTML(icons.rotate)}Regenerar contraseña</button>

                <div class="separetor card-container-general"> <hr/> <small class="mono-font">Set up</small></div>

                <div class="lenght-pass marked-inner-container card-container-general d-flexx d-col">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">lenght</small>
                        <small class="mono-font">22 chars</small>
                    </span>
                    <input type="range" id="length" name="length" min="8" max="64">
                    <span class="footer-marked d-flexx d-row ">
                        <small class="mono-font">8</small>
                        <small class="mono-font">64</small>
                    </span>
                </div>
                
            </section>
        `;
    }
}

customElements.define("card-view", CardView);