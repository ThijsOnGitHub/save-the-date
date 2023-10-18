import { AgendaItem } from '@/App';
import * as ics from 'ics';

export function AgendaItemsToIcal(items: AgendaItem[]) {
    const AgendaItems = items.map<ics.EventAttributes>((item) => {
        return {
            title: item.name,
            start: [item.date.getFullYear(), item.date.getMonth(), item.date.getDate(), item.date.getHours(), item.date.getMinutes()],
            duration: {hours: item.length.hours, minutes: item.length.minutes}
        }
    })
    return ics.createEvents(AgendaItems).value ?? ""
}