import { html, css, LitElement } from 'lit';
import { MyInput } from './MyInputText/MyInputText'

export class PatronMediatorLit extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--patron-mediator-lit-text-color, #000);
    }
  `;

  static properties = {
    miDato: {
      type: String,
      attibute: 'mi-dato'
    },
  };

  constructor() {
    super();
    this.miDato = 'Valor de inicializacion';
  }

  _inputCambiado(e) {
    this.miDato = e?.detail;
  }

  _resetText() {
    this.miDato = '';
  }

  render() {
    return html`
      <div>
        <h1> Soy el elemento padre</h1>
        <my-input
          value-input="${this.miDato}"
          @my-input-change-value="${this._inputCambiado}"
        ></my-input>
        <span>El dato que metites se ve aqui!! ${this.miDato}</span>
      </div>

      <button @click="${this._resetText}">Resetear texto</button>
    `;
  }
}
