import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import '@vaadin/icon';
import { Icon } from "@vaadin/icon";

@customElement('event-header')
export class EventHeader extends LitElement{
	
	@property()
	year?: number;
	
	@property()
	month?: number;
	
	@property()
	dayOfMonth?: number;
	
	@property()
	hours?: number;
	
	@property()
	minutes?: number;
	
	@property()
	seconds?: number;
	
	@property()
	name?: String;
	
	@property()
	openClosed: Boolean = false;
	
	static styles = css`
		:host {
			display: flex;
			background-color: rgb(113 120 110);
			flex-direction: column;
    		justify-content: center;
    		color: white;
    		border-radius: 4px;
    		position: relative;
		}
		.top-row{
			display: flex;
			flex-direction: row;
			padding: .1em .52em;
			align-items: center;
			font-size: .8em;
		}
		.date {
			
		}
		.spacer{
			flex-grow: 1;
		}
		.opener{
			display:flex;
			margin-right: 0.52em;
		}
		.opener > * {
			display: none;
		}
		.open{
			display: initial;
		}
		.inner{
			margin: 0.52em;
		}
		.close{
			display: none;
		}
		#user-comp-holder{
			margin: 0.32em;
    		background-color: rgb(124 129 122);
    		border-radius: 4px;
		}
		
	`;
	
	@query('#opener-open')
	openIcon: Icon | undefined;
	
	@query('#opener-closed')
	closeIcon: Icon | undefined;
	
	@query('#user-comp-holder')
	userCompHolder: HTMLDivElement | undefined;
	
	openClose(_event: any){
		console.log("opener clicked.")
			if(this.openIcon!=null){
				this.openIcon.classList.toggle("open");
			}
			if(this.closeIcon!=null){
				this.closeIcon.classList.toggle("open");
			}
			if(this.userCompHolder!=null){
				this.userCompHolder.classList.toggle("close");
			}
			

	}
	
	render(){
		
		return html`
			<div class='top-row'>
				<div class='opener' @click="${(e: any) => this.openClose(e)}">
					<vaadin-icon class="open" id='opener-open' icon="lumo:angle-down"></vaadin-icon>
					<vaadin-icon id='opener-closed' icon="lumo:cross"></vaadin-icon>
				</div>
				<div class='eventName'>
					${
						this.name
					}
				</div>
				<div class='spacer'>
				</div>
				<div class='date'>
					${
						this.dayOfMonth?.toString() +
						"/" + this.month?.toString() +
						"/" + this.year?.toString() +
						" " + this.hours?.toString().padStart(2, '0') +
						":" + this.minutes?.toString().padStart(2, '0') +
						":" + this.seconds?.toString().padStart(2, '0') 
					}
				</div>
			</div>
			<div class='body'>
				<div id='user-comp-holder' class='inner close'>
					<slot></slot>
				</div>
			</div>
			`;
			
	}
	
}