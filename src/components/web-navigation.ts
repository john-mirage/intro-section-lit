import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('web-navigation')
export class WebNavigation extends LitElement {
  static styles = css`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }

    .navigation {
      box-sizing: border-box;
      width: 100%;
      height: auto;
    }

    .dropdown {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      margin-bottom: 16px;
    }

    .dropdown__header {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      list-style: none;
      cursor: pointer;
    }

    .dropdown__body {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      padding-left: 24px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    .dropdown__name {
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 500;
      color: var(--color-medium-gray);
    }

    .dropdown__icon {
      box-sizing: border-box;
      width: 10px;
      height: auto;
    }

    .dropdown[open] .dropdown__icon {
      transform: rotate(180deg);
    }

    .link {
      box-sizing: border-box;
      display: block;
      width: 100%;
      text-decoration: none;
      margin-bottom: 16px;
    }

    .link:last-child {
      margin-bottom: 0;
    }

    .link__icon {
      box-sizing: border-box;
      display: inline-block;
      width: 20px;
      height: auto;
      margin-right: 12px;
      vertical-align: middle;
    }

    .link__text {
      font-size: 16px;
      font-weight: 500;
      color: var(--color-medium-gray);
      vertical-align: middle;
    }

    @media screen and (min-width: 992px) {
      .navigation {
        display: flex;
        flex-direction: row;
        padding-top: 4px;
      }

      .dropdown {
        position: relative;
        margin: 0 32px 0 0;
      }

      .dropdown__header {
        gap: 4px;
      }

      .dropdown__name {
        font-size: 14px;
      }

      .dropdown__body {
        position: absolute;
        bottom: -20px;
        transform: translateY(100%);
        width: 156px;
        padding: 24px;
        margin: 0;
        background-color: #fff;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
        border-radius: 12px;
      }

      .dropdown__body--from-right {
        right: 0;
      }

      .dropdown__body--from-left {
        left: 0;
      }

      .link__icon {
        width: 16px;
      }

      .link__text {
        font-size: 14px;
        font-weight: 500;
      }

      .link--top {
        margin: 0;
        line-height: 1;
      }

      .link--top:last-child {
        margin-left: 32px;
      }
    }
  `;

  render() {
    return html`
      <nav class="navigation">
        <details class="dropdown">
          <summary class="dropdown__header">
            <span class="dropdown__name">Features</span>
            <svg class="dropdown__icon" width="10" height="6" viewBox="0 0 10 6"
               xmlns="http://www.w3.org/2000/svg">
              <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
            </svg>
          </summary>
          <div class="dropdown__body dropdown__body--from-right">
            <a class="link" href="#">
              <svg class="link__icon" width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/>
              </svg>
              <span class="link__text">Todo List</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/>
              </svg>
              <span class="link__text">Calendar</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="13" height="17" viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/>
              </svg>
              <span class="link__text">Reminders</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/>
              </svg>
              <span class="link__text">Planning</span>
            </a>
          </div>
        </details>
        <details class="dropdown">
          <summary class="dropdown__header">
            <span class="dropdown__name">Company</span>
            <svg class="dropdown__icon" width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
            </svg>
          </summary>
          <div class="dropdown__body dropdown__body--from-left">
            <a class="link" href="#">
              <span class="link__text">History</span>
            </a>
            <a class="link" href="#">
              <span class="link__text">Our Team</span>
            </a>
            <a class="link" href="#">
              <span class="link__text">Blog</span>
            </a>
          </div>
        </details>
        <a class="link link--top" href="#">
          <span class="link__text">Careers</span>
        </a>
        <a class="link link--top" href="#">
          <span class="link__text">About</span>
        </a>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-navigation': WebNavigation
  }
}