import { html, TemplateResult } from 'lit';
import '../src/event-display.js';
import { LxEvents } from '../src/i-event.js';

export default {
  title: 'EventDisplay',
  component: 'event-display',
  argTypes: {
    events: { control: 'text' },
    panelName: {control: 'text'}
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  events?: string;
  panelName?: string;
}

const Template: Story<ArgTypes> = ({
  title = 'Hello world',
  events = '[]',
  panelName = 'Simple Event Panel'
}: ArgTypes) => {
  
  var evts;
  try{
    evts = JSON.parse(events);
  }catch(err){
    evts = [];
  }
  return html`
  <event-display
    .evt=${evts}  panelName=${panelName}
  >
  </event-display>
  `
};

export const NoEvents = Template.bind({});

export const OneEvent = Template.bind({});
OneEvent.args = {
  events: JSON.stringify([
    {
      uuid: "smkd",
      name: "Core message",
      year: 2012,
      month: 10,
      dayOfMonth: 21,
      hour: 20,
      minutes: 46,
      seconds: 56,
      payload: {"name": "hayden"}
    }

  ])
}

export const MultipleEvents = Template.bind({});
MultipleEvents.args = {
  events: JSON.stringify([
    {
      uuid: "smkd",
      name: "Core message",
      year: 2012,
      month: 10,
      dayOfMonth: 21,
      hour: 20,
      minutes: 46,
      seconds: 56,
      payload: {"name": "hayden"}
    },
    {
      uuid: "she",
      name: "IF message",
      year: 2012,
      month: 10,
      dayOfMonth: 21,
      hour: 20,
      minutes: 45,
      seconds: 34,
      payload: {"name": "hayden"}
    }

  ])
}

export const ErrorEvent = Template.bind({});
ErrorEvent.args = {
  events: JSON.stringify([
    {
      uuid: "smkd",
      name: "Core message",
      year: 2012,
      month: 10,
      dayOfMonth: 21,
      hour: 20,
      minutes: 46,
      seconds: 56,
      payload: {"name": "hayden"}
    },
    {
      uuid: "she",
      name: "IF message",
      year: 2012,
      month: 10,
      dayOfMonth: 21,
      hour: 20,
      minutes: 45,
      seconds: 34,
      payload: {"name": "hayden"}
    }

  ])
}
