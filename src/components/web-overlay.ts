import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

@customElement('web-overlay')
export class WebOverlay extends LitElement {
  @property({ attribute: "is-visible", type: Boolean })
  isVisible: boolean = false;

  static styles = css`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
    }
    
    .overlay {
      display: none;
      position: fixed;
      z-index: 40;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-almost-black);
      opacity: 0.8;
    }
    
    .overlay--visible {
      display: block;
    }

    @media screen and (min-width: 992px) {
      .overlay {
        display: none;
      }
    }
  `;

  closeSidebar() {
    this.dispatchEvent(new CustomEvent("close-sidebar", {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const classes = { "overlay": true, "overlay--visible": this.isVisible };
    return html`
        <div class=${classMap(classes)} @click=${this.closeSidebar}></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-overlay': WebOverlay
  }
}