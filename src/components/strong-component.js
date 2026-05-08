import { LitElement, html, css } from "lit-element";
import { unsafeCSS } from "lit-element";

/* --- STYLES --- */
import generalStyles from '../styles/mainStyles.css?inline';
import componentStyles from '../styles/componetStyles/strong-component.css?inline';
/* --- STYLES --- */

export class StrongComponent extends LitElement {

    static properties = {
        passGenerated: { type: String },
        strength: { type: String },
    };

    constructor(){
        super();
        this.strength = 'strong';
        this.passGenerated = '';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(componentStyles)}`,
    ]

    updated(){
        this._updateStrength();
    }

    render(){
        return html`
            <!-- STRONG VISUALIZER - 03 -->
                <div class="strong-visualizer card-container-general">
                    <div class="container-strong-bars d-flexx d-row">
                        ${this.renderBars()}
                    </div>
                    <small class="text-strong-bar mono-font">
                        ${this.strength?.toUpperCase()}
                    </small>
                </div>
                <!-- END STRONG VISUALIZER - 03 -->
        `;
    };

    _getPasswordStrength(password) {
        if (!password) {
            return 0;
        }

        let score = 0;

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[^A-Za-z0-9]/.test(password);

        const variety =
            Number(hasUpper) +
            Number(hasLower) +
            Number(hasNumbers) +
            Number(hasSymbols);

        if (password.length >= 6 && variety >= 2) {
            score = 1;
        }
        if (password.length >= 8 && variety >= 2) {
            score = 2;
        }
        if (password.length >= 10 && variety >= 3) {
            score = 3;
        }
        if (
            password.length >= 12 && hasUpper && hasLower && hasNumbers && hasSymbols) {
            score = 4;
        }
        if (
            password.length >= 15 && hasUpper && hasLower && hasNumbers && hasSymbols) {
            score = 5;
        }
        if (
            password.length >= 20 && hasUpper && hasLower && hasNumbers && hasSymbols) {
            score = 6;
        }
        if (
            password.length >= 30 && hasUpper && hasLower && hasNumbers && hasSymbols) {
            score = 7;
        }

        return score;
    }

    _getStrengthLevel(score) {
        switch(score) {
            case 1:
                return 'fragile';
            case 2:
                return 'basic';
            case 3:
                return 'solid';
            case 4:
                return 'secure';
            case 5:
                return 'fortified';
            case 6:
                return 'bulletproof';
            case 7:
                return 'neon';
            default:
                return 'fragile';
        }
    }

    _updateStrength() {
        const score = this._getPasswordStrength(this.passGenerated);
        this.strengthScore = score;
        this.strength = this._getStrengthLevel(score);
    }

    renderBars() {
        const levels = {
            fragile: 1,
            basic: 2,
            solid: 3,
            secure: 4,
            fortified: 5,
            bulletproof: 6,
            neon: 7,
        };

        const active = levels[this.strength] || 0;
        
        return [0, 1, 2, 3].map(i => html`
            <span 
                class="strong-bar-color ${i < active ? this.strength : ''}">
            </span>
        `);
    }

}
customElements.define('strong-component', StrongComponent);
