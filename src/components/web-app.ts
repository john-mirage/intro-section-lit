import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import "./web-bar";
import "./web-hero";
import "./web-navigation";
import "./web-sidebar";
import "./web-overlay";

@customElement('web-app')
export class WebApp extends LitElement {
  @state()
  protected _sidebarIsOpen: boolean = false;

  @state()
  protected _overlayIsVisible: boolean = false;

  constructor() {
    super();
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar() {
    this._sidebarIsOpen = true;
    this._overlayIsVisible = true;
  }

  closeSidebar() {
    this._sidebarIsOpen = false;
    this._overlayIsVisible = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("open-sidebar", this.openSidebar);
    this.addEventListener("close-sidebar", this.closeSidebar);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("open-sidebar", this.openSidebar);
    this.removeEventListener("close-sidebar", this.closeSidebar);
  }

  render() {
    return html`
      <web-bar>
        <web-navigation parent="bar" slot="navigation"></web-navigation>
      </web-bar>
      <web-hero></web-hero>
      <web-sidebar ?is-open=${this._sidebarIsOpen}>
        <web-navigation parent="sidebar" slot="navigation"></web-navigation>
      </web-sidebar>
      <web-overlay ?is-visible=${this._overlayIsVisible}></web-overlay>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-app': WebApp
  }
}