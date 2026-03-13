import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";

/* --- STYLES --- */
import generalStyles from '../styles/mainStyles.css?inline';
/* --- STYLES --- */

/* --- COMPONENTS --- */
import '../views/card-view.js';
/* import '../components/letter-component.js';
import '../views/museum-view.js'; */
/* --- COMPONENTS --- */

export class MainPage extends LitElement{
    static properties = {
        nombre: { type: String },
    };
    
    constructor(){
        super();
        this.nombre = '';
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
    ]

    render(){
        return html`
            <main class="main-container d-flexx d-row">
                <card-view></card-view>
            </main>
        `;
    }
}

customElements.define("main-page", MainPage);