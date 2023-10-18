import { AgendaItem } from '@/App';
import { add, format } from 'date-fns';
export function OpenItemInGoogleCalendar(agendaItem: AgendaItem){
    const startTime = format(agendaItem.date, "yyyyMMdd'T'HHmmssX") ;
    const endTime = format(add(agendaItem.date, agendaItem.length), "yyyyMMdd'T'HHmmssX"); 
    const title = agendaItem.name;
    const description = "";
    const location = "";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}&location=${location}`;
    window.open(url, '_blank');
}