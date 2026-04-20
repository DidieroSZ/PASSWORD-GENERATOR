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
                        <!--
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        <span class="strong-bar-color"></span>
                        -->
                    </div>
                    <small class="text-strong-bar mono-font">${this.strength?.toUpperCase()}</small>
                </div>
                <!-- END STRONG VISUALIZER - 03 -->
        `;
    };

    _getPasswordStrength(password) {
        let score = 0;

        if (!password) return 0;

        // Longitud
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (password.length >= 20) score++;

        // Tipos de caracteres
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score; // 0 a 6
    }

    _getStrengthLevel(score) {
        if (score <= 2) return 'weak';
        if (score <= 4) return 'medium';
        return 'strong';
    }

    _updateStrength() {
        const score = this._getPasswordStrength(this.passGenerated);
        this.strength = this._getStrengthLevel(score);
    }

    renderBars() {
        const levels = {
            weak: 1,
            medium: 2,
            strong: 4
        };

        const active = levels[this.strength] || 0;

        return [0,1,2,3].map(i => html`
            <span class="strong-bar-color ${i < active ? this.strength : ''}"></span>
        `);
    }

}
customElements.define('strong-component', StrongComponent);
