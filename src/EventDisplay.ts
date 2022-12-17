import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {repeat} from 'lit/directives/repeat.js';
import {LxEvent, LxEvents} from './i-event.js';
import './event-header.js'


export class EventDisplay extends LitElement{
	
	@property({type: Array
	})
	evt: LxEvents | undefined
	
	@state()
	evtState: LxEvents = [];
	
	static styles = css`
	
		event-header {
			margin: 0.2em;
		}
		:host{
			background-color: #dcd9d9;
		}
	`;
	
	render(){
		
		return html`
			${
				repeat(this.evt!, (e: LxEvent) => e.uuid, (i:LxEvent, idx: number)=>html`
					<event-header name="${i.name}" 
						year=${i.year}
				 		month=${i.month}
						dayOfMonth=${i.dayOfMonth}
						hours=${i.hour}
						minutes=${i.minutes}
						seconds=${i.seconds}>
					<json-viewer>
						${JSON.stringify(i.payload)}
					</json-viewer>
				</event-header>
				
				`)
			}
		`;
	}
	
}