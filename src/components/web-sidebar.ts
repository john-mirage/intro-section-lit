import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import closeMenuIcon from '../images/icon-close-menu.svg';

@customElement('web-sidebar')
export class WebSidebar extends LitElement {
  @property({ attribute: "is-open", type: Boolean })
  isOpen: boolean = false;

  static styles = css`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }
    
    .sidebar {
      display: none;
      position: fixed;
      z-index: 50;
      top: 0;
      right: 0;
      box-sizing: border-box;
      width: 240px;
      height: 100vh;
      max-height: 100vh;
      border: none;
      background-color: var(--color-almost-white);
      padding: 16px 16px 16px 24px;
    }
    
    .sidebar--open {
      display: block;
    }

    .sidebar__button {
      box-sizing: border-box;
      display: flex;
      width: 28px;
      height: 28px;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0 0 36px auto;
      cursor: pointer;
    }

    .sidebar__icon {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      margin: auto;
    }

    @media screen and (min-width: 992px) {
      .sidebar {
        display: none;
      }
    }
  `;

  private closeSidebar() {
    this.dispatchEvent(new CustomEvent("close-sidebar", {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const classes = { "sidebar": true, "sidebar--open": this.isOpen };
    return html`
      <aside class=${classMap(classes)}>
        <button class="sidebar__button" @click=${this.closeSidebar}>
          <img class="sidebar__icon" src=${closeMenuIcon} alt="close icon">
        </button>
        <slot name="navigation"></slot>
      </aside>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-sidebar': WebSidebar
  }
}