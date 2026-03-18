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
                <!-- TITLE CARD - 01 -->
                <div class="title-card-container card-container-general">
                    <h3 class="title-card d-flexx">${unsafeHTML(icons.key)} PASSWORD GENERATOR</h3>
                    <small class="d-flexx mono-font">SECURE PASSWORD GENERATOR</small>
                </div>
                <!-- END TITLE CARD - 01 -->

                <!-- PASS SHOWER - 02 -->
                <div class="pass-shower marked-inner-container card-container-general">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">CURRENT PASSWORD</small>
                        <small class="mono-font">22 chars</small>
                    </span>
                    <p class="text-pass-shower">*9-c6Y249R4.@J:q_4YLwn</p>
                </div>
                <!-- END PASS SHOWER - 02 -->

                <!-- STRONG VISUALIZER - 03 -->
                <div class="strong-visualizer card-container-general">
                    <div class="container-strong-bars d-flexx d-row">
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                    </div>
                    <small class="text-strong-bar mono-font">STRONG</small>
                </div>
                <!-- END STRONG VISUALIZER - 03 -->

                <!-- BUTTON REGENERATE - 04 -->
                <button class="btn-gen btn-pri d-flexx">${unsafeHTML(icons.rotate)}Regenerar contraseña</button>
                <!-- END BUTTON REGENERATE - 04 -->

                <!-- STRONG SEPARADOR - 05 -->
                <div class="separetor card-container-general"> <hr/> <small class="mono-font">Set up</small></div>
                <!-- END SEPARADOR - 05 -->

                <!-- LENGHT SELECTOR - 06 -->
                <div class="lenght-pass marked-inner-container card-container-general d-flexx d-col">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">lenght</small>
                        <small class="mono-font frame-small">22</small>
                    </span>
                    <input type="range" id="length" name="length" min="0" max="16" value="4">
                    <span class="footer-marked d-flexx d-row ">
                        <small class="mono-font">8</small>
                        <small class="mono-font">64</small>
                    </span>
                </div>
                <!-- END LENGHT SELECTOR - 06 -->

                <!-- CHARACTER SELECTOR - 07 -->
                <div class="character-selector card-container-general d-flexx d-row"> 
                    <label for="upper" class="option-character d-flexx d-row">
                        <input type="checkbox" class="input-char" value="upper" name="upper" id="upper">
                        <span class="layer-char"></span>
                        <p class="char-symbol">ABC</p>
                        <small class="char-name">CAPITAL LETTERS</small>
                        
                    </label>
                    <label for="lower" class="option-character d-flexx d-row">
                        <input type="checkbox" class="input-char" value="lower" name="lower" id="lower">
                        <span class="layer-char"></span>
                        <p class="char-symbol">abc</p>
                        <small class="char-name">LOWERCASE</small>
                        
                    </label>
                    <label for="numbers" class="option-character d-flexx d-row">
                        <input type="checkbox" class="input-char" value="numbers" name="numbers" id="numbers">
                        <span class="layer-char"></span>
                        <p class="char-symbol">123</p>
                        <small class="char-name">NUMBERS</small>
                        
                    </label>
                    <label for="symbols" class="option-character d-flexx d-row">
                        <input type="checkbox" class="input-char" value="symbols" name="symbols" id="symbols">
                        <span class="layer-char"></span>
                        <p class="char-symbol">!@#</p>
                        <small class="char-name">SYMBOLS</small>
                        
                    </label>
                </div>
                <!-- END CHARACTER SELECTOR - 07 -->
                
            </section>
        `;
    }
}

customElements.define("card-view", CardView);