import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { EventDisplay } from '../src/EventDisplay.js';
import '../src/event-display.js';

describe('EventDisplay', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<EventDisplay>(html`<event-display></event-display>`);

    expect(el.title).to.equal('Hey there');
    //expect(el.counter).to.equal(5);
  });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<EventDisplay>(html`<event-display></event-display>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  it('can override the title via attribute', async () => {
    const el = await fixture<EventDisplay>(html`<event-display title="attribute title"></event-display>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<EventDisplay>(html`<event-display></event-display>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
