import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';
import '../components/header-index'; // Import the header component
import '../components/side-menu'; // Import the side menu component

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome to Indo!';

  static styles = [
    styles,
    css`
      main {
        margin-top: 0px;
        margin-left: 60px;
        padding-right: 0px;
        padding-bottom: 0px;
      }
      section {
        display: flex;
        flex-direction: column;
      }
      sl-card {
        min-width: 100%;
        padding: 16px;
      }

      sl-card h2 {
        margin-top: 0;
      }
    `
  ];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
  }

  render() {
    return html`
      <header-index></header-index>
      <side-menu></side-menu> <!-- Ajoute le menu latéral -->

      <main>
        <section>
          <h1>${this.message}</h1>
          <p>Welcome in Indo. Here we are all reading mangas and webtoons from everywhere in the world !</p>
          <sl-card>
            <h2>To Start</h2>
            <p>First please create an account</p>
            <sl-button href="${resolveRouterPath('/signup')}">Sign Up</sl-button>
          </sl-card>
        </section>
      </main>
    `;
  }
}