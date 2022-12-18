import { css, html, LitElement, render as REN } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import '@vaadin/virtual-list';
import {repeat} from 'lit/directives/repeat.js';
import {LxEvent, LxEvents} from './i-event.js';
import './event-header.js'
import { VirtualListRenderer } from "@vaadin/vaadin-virtual-list";


export class EventDisplay extends LitElement{
	
	@property({type: Array
	})
	evt: LxEvents | undefined

	@property()
	panelName?: string;

	static styles = css`
	
		event-header {
			margin: 0.4em;
		}
		:host{
			background-color: #dcd9d9;
			width: 100%;
			font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		#inner{
			max-width: 400px;
			background-color: hsl(59deg 32% 91%);
			border-radius: 4px;
		}
		#panel-name{
			margin: .5em;
			font-size: 1.2em;
			color: hsl(223deg 37% 45%);
			font-weight: 600;
		}
	`;

	listRenderer: VirtualListRenderer<LxEvent> = (root, list, {item, index}) => {
		const templat = html`
			<event-header name="${item.name}" 
				year=${item.year}
				month=${item.month}
				dayOfMonth=${item.dayOfMonth}
				hours=${item.hour}
				minutes=${item.minutes}
				seconds=${item.seconds}>
			<json-viewer>
				${JSON.stringify(item.payload)}
			</json-viewer>
		</event-header>`

		REN(templat, root);

	  };
	
	render(){
		
		return html`
			<div id="inner">
				<div id="panel-name">
					${this.panelName}
				</div>
				<vaadin-virtual-list id="list" .items=${this.evt} .renderer=${this.listRenderer} >
				</vaadin-virtual-list>
			</div>
		`;
	}
	
}