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
                <h3 class="title-card d-flexx">${unsafeHTML(icons.key)} PASSWORD GENERATOR</h3>
                <small class="d-flexx mono-font">SECURE PASSWORD GENERATOR</small>

                <div class="pass-shower">
                    <span class="header-pass-shower d-flexx d-row "><small class="mono-font">CURRENT PASSWORD</small> <small class="mono-font">22 chars</small></span>
                    <p class="text-pass-shower">*9-c6Y249R4.@J:q_4YLwn</p>
                    
                </div>
            </section>
        `;
    }
}

customElements.define("card-view", CardView);