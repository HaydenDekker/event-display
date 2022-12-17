export interface LxEvent {
	uuid: string;
	name: string;
	year: number;
	month: number;
	dayOfMonth: number;
	hour: number;
	minutes: number;
	seconds: number;
	payload: Object;
}

export interface LxEvents extends Array<LxEvent>{}