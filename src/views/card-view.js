import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/mainStyles.css?inline';
import cardViewStyles from '../styles/viewStyles/card-view.css?inline';
/* --- STYLES --- */

/* --- SERVICES --- */
import { generatePasswords } from '../services/service-generatePassword.js'
/* --- SERVICES --- */

/* --- COMPONENTS --- */
import '../components/selector-component.js'
/* --- COMPONENTS --- */

/* --- ICONS --- */
import { icons } from '../utils/icons.js'
/* --- ICONS --- */

export class CardView extends LitElement{
    static properties = {
        passGenerated: { type: String },
        lengthSetUp: { type: Number },
        options: { type: Object },
        alert: { type: Boolean},
    };
    
    constructor(){
        super();
        this.passGenerated = '*9-c6Y249R4.@J:q_4YLwn';
        this.lengthSetUp = 22;
        this.opciones = {
            upper: true,
            lower: true,
            numbers: true,
            symbols: true,
        };
        
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(cardViewStyles)}`,
    ]

    firstUpdated(){
        this._deleteAlert();
    }

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
                <div class="pass-shower marked-inner-container card-container-general d-flexx d-col">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">CURRENT PASSWORD</small>
                        <small class="mono-font">${this.passGenerated.length} chars</small>
                    </span>
                    <p class="text-pass-shower">${this.passGenerated}</p>
                    <small class="copy-btn mono-font d-flexx">${unsafeHTML(icons.files)} click para copiar</small>
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
                <button class="btn-gen btn-pri d-flexx" @click=${this._generarPass} >${unsafeHTML(icons.rotate)}Regenerar contraseña</button>
                <!-- END BUTTON REGENERATE - 04 -->

                <!-- STRONG SEPARADOR - 05 -->
                <div class="separetor card-container-general"> <hr/> <small class="mono-font">Set up</small></div>
                <!-- END SEPARADOR - 05 -->

                <!-- LENGHT SELECTOR - 06 -->
                <div class="lenght-pass marked-inner-container card-container-general d-flexx d-col">
                    <span class="header-marked d-flexx d-row ">
                        <small class="mono-font">lenght</small>
                        <small class="mono-font frame-small">${this.lengthSetUp}</small>
                    </span>
                    <input type="range" id="length" name="length" min="4" max="32" value="${this.lengthSetUp}" step="2" @input=${this._renderLength}>
                    <span class="footer-marked d-flexx d-row ">
                        <small class="mono-font">4</small>
                        <small class="mono-font">32</small>
                    </span>
                </div>
                <!-- END LENGHT SELECTOR - 06 -->

                <!-- ALERTA - 08 -->
                    <div class="alert-modal card-container-general d-flexx">
                        <small>¡Verifica los campos seleccionados!</small>
                    </div>
                <!-- END ALERTA - 08 -->

                <!-- CHARACTER SELECTOR - 07 -->
                <div @change-selector=${this._selectorsChanges} class="character-selector card-container-general d-flexx d-row"> 
                    <selector-component .symbol="${'ABC'}" .value="${'upper'}" .name="${'CAPITAL LETTERS'}"></selector-component>
                    <selector-component .symbol="${'abc'}" .value="${'lower'}" .name="${'LOWERCASE'}"></selector-component>
                    <selector-component .symbol="${'123'}" .value="${'numbers'}" .name="${'NUMBERS'}"></selector-component>
                    <selector-component .symbol="${'!@#'}" .value="${'symbols'}" .name="${'SYMBOLS'}"></selector-component>
                </div>
                <!-- END CHARACTER SELECTOR - 07 -->


                
            </section>
        `;
    }

    _generarPass(){
        this._alertModal();
        if (this.alert) {
            this.passGenerated = generatePasswords(this.lengthSetUp, this.opciones);
        }
    }

    _renderLength(e){
        this.lengthSetUp = e.target.value;
    }

    _selectorsChanges(e){
        const { valor, checked } = e.detail;
        this.opciones[valor] = checked;
        this._alertModal();
    }

    _deleteAlert(){
        let alertElement = this.renderRoot.querySelector('.alert-modal');
        alertElement.style.height = '0px';
        let selector1 = this.renderRoot.querySelector('selector-component');
        selector1.click;
    }
    _alertModal(){
        let alertElement = this.renderRoot.querySelector('.alert-modal');
        const alerta = Object.values(this.opciones).some(v => v);

        if (!alerta) {
            this.alert = false;
            alertElement.style.height = 'auto';
        }
        else{
            this.alert = true;
            alertElement.style.height = '0px';
        }
    }

}



customElements.define("card-view", CardView);