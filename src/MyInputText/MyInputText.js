import { html, css, LitElement } from 'lit';

export class MyInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--patron-mediator-lit-text-color, #000);
    }
  `;

  static properties = {
    valueInput: {
        type: String,
        attribute: 'valie-input'
    }
  };

  constructor() {
    super();
    this.valueInput = '';
  }

  _handleValue(e) {
    this.valueInput = e.target.value;
    this.dispatchEvent(new CustomEvent('my-input-change-value',  {
        bubbles: true,
        composed: true,
        detail: this.valueInput
    }));
  }

  render() {
    return html`
      <div>
        <span>Necesitas meter tu info aqui!!</span>
        <input id="input-value" type="text" .value="${this.valueInput}" @input="${this._handleValue}" placeholder="mete tu dato aqui"/>
      </div>
    `;
  }
}

customElements.define('my-input', MyInput);
