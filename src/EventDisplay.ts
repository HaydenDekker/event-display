import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {repeat} from 'lit/directives/repeat.js';
import {LxEvent, LxEvents} from './i-event.js';
import './event-header.js'


export class EventDisplay extends LitElement{
	
	@property({type: Array
	})
	evt: LxEvents | undefined
	
	static styles = css`
	
		event-header {
			margin: 0.2em;
		}
		:host{
			background-color: #dcd9d9;
			width: 100%;
			font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		#inner{
			max-width: 400px;
		}
	`;
	
	render(){
		
		return html`
			<div id="inner">
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
			</div>
		`;
	}
	
}