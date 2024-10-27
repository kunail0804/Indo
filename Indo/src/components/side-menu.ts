import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('side-menu')
export class SideMenu extends LitElement {
  static styles = css`
    .side-menu {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 60px;
      background-color: #38444d;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 60px;
    }
    .menu-item {
      color: white;
      text-align: center;
      padding: 16px 0;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }
    .menu-item:hover {
      background-color: red;
    }
    .menu-item:last-child {
      margin-top: auto;
      margin-bottom: 72px; /* padding-top .side-menu + 12 */
    }
    .icon {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon img {
      object-fit: contain;
    }
  `;

  render() {
    return html`
      <div class="side-menu">
        <div class="menu-item" @click="${() => window.location.href = resolveRouterPath('/home')}">
          <span class="icon"><img src="/assets/img/home-icon.png" alt="Home" style="width: 6em; height: 6em;"></span>
        </div>
        <div class="menu-item" @click="${() => window.location.href = resolveRouterPath('/search')}">
          <span class="icon"><img src="/assets/img/search-icon.png" alt="Search" style="width: 4.2em; height: 4.2em;"></span>
        </div>
        <div class="menu-item" @click="${() => window.location.href = resolveRouterPath('/settings')}">
          <span class="icon"><img src="/assets/img/settings-icon.png" alt="Settings" style="width: 3.4em; height: 3.4em;"></span>
        </div>
      </div>
    `;
  }
}