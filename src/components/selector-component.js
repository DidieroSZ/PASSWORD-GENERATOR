import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";

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
                <input type="checkbox" checked @change=${this._changeState} class="input-char" value="${this.value}"  id="${this.value}" name="${this.value}">
                <span class="layer-char"></span>
                <p class="char-symbol">${this.symbol}</p>
                <small class="char-name">${this.name}</small>
            </label>
        `;
    };

    _changeState(e){
        const checked = e.target.checked;

        this.dispatchEvent( new CustomEvent('change-selector', {
            bubbles: true,
            composed: true,
            detail: {
                valor: this.value,
                checked: checked,
            },
        }))
    }
}
customElements.define('selector-component', SelectorComponent);
