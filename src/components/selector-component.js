import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/mainStyles.css?inline';
import componentStyles from '../styles/componetStyles/selector-component.css?inline';
/* --- STYLES --- */

export class SelectorComponent extends LitElement {

    static properties = {
        symbol: { type: String },
        name: { type: String },
        value: { type: String },
    };

    constructor(){
        super();
        this.symbol = 'ABC';
        this.name = 'Capital Letters';
        this.value = 'symbols';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(componentStyles)}`,
    ]

    render(){
        return html`
            <label for="${this.value}" class="option-character d-flexx d-row">
                <input type="checkbox" class="input-char" value="${this.value}" name="${this.value}" id="${this.value}">
                <span class="layer-char"></span>
                <p class="char-symbol">${this.symbol}</p>
                <small class="char-name">${this.name}</small>
            </label>
        `;
    };
}
customElements.define('selector-component', SelectorComponent);
