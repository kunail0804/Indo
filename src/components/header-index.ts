import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('header-index')
export class HeaderIndex extends LitElement {
  @property({ type: String }) title = 'Indo';

  static styles = css`
    header {
      background-color: #38444d;
      overflow: visible;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 0px;
      height: 60px;
    }
    h1 {
      margin: 0;
      font-size: 24px;
      color: #ffffff;
      padding: 0px 0px;
      float: left;
      margin-left: 80px;
    }
    nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      flex-grow: 1;
    }
    .nav-item, .dropbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 0 16px;
      text-decoration: none;
      cursor: pointer;
      height: 100%;
      box-sizing: border-box;
    }
    .nav-item:hover, .dropdown:hover .dropbtn {
      background-color: red;
    }
    .dropdown {
      display: inline-block;
      position: relative;
      height: 100%;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top: 100%;
      left: 0;
      margin-right: 16px;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  `;

  navigateTo(path: string) {
    window.location.href = resolveRouterPath(path);
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <nav>
          <div class="nav-item" @click="${() => this.navigateTo('/sources')}">Sources</div>
          <div class="nav-item" @click="${() => this.navigateTo('/docs')}">Docs</div>
          <div class="nav-item" @click="${() => this.navigateTo('/rules')}">Rules</div>
          <div class="nav-item" @click="${() => this.navigateTo('/contact')}">Contact</div>
          <div class="nav-item" @click="${() => this.navigateTo('/signin')}">Sign In</div>
          <div class="nav-item" @click="${() => this.navigateTo('/signup')}">Sign Up</div>
        </nav>
      </header>
    `;
  }
}