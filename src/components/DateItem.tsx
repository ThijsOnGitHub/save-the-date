import { CalendarDays, CalendarPlus } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export interface DateItemProps{
    itemName: string;
    date: Date;
    length: {hours: number, minutes: number};
    onAddClick?: {[agendaType: string]: () => void};
    showAddButton?: boolean;
}

export const DateItem: React.FC<DateItemProps> = ({date,itemName, onAddClick, showAddButton,length}) => {
    return (
        <div className="space-y-8">
        <div className="flex items-b items-center justify-between">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{itemName}</p>
            <p className="text-sm text-muted-foreground ">
                {date.toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} {date.toLocaleTimeString(undefined,{hour: '2-digit', minute: '2-digit'})}
            </p>
            <p className="text-sm text-muted-foreground ">
                  {length.hours}h {length.minutes}m
              </p>
          </div>
          {
            onAddClick != undefined && Object.entries(onAddClick).length != null &&
            <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant={'outline'} ><CalendarPlus className='h-4 w-4' /></Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(onAddClick ?? {}).map(([key,value]) => <DropdownMenuItem onClick={value}>{key}</DropdownMenuItem>)}
            </DropdownMenuContent>
            </DropdownMenu>
          }
  
        </div>
      </div>
    );
}