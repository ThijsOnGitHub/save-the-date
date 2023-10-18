import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import './style/globals.css'
import './style/index.scss'
import { CenterContainer } from './components/centerContainer'
import { CalendarDays } from 'lucide-react'
import { Separator } from './components/ui/separator'
import { DateItem } from './components/DateItem'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './components/ui/dropdown-menu'
import { downloadIcsFile } from './functions/downloadICSFile'
import { AgendaItemsToIcal } from './functions/AgendaItemsToIcal'
import { OpenItemInGoogleCalendar } from './functions/OpenItemInGoogleCalendar'

export interface AgendaItem{
  name: string;
  date: Date;
  length: {hours: number, minutes: number};
}

function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const meetings = urlParams.get('d');
 
  var items: AgendaItem[] = []
  try{
    items = meetings ? JSON.parse(meetings) as AgendaItem[] : []
    items.map((item) => item.date = new Date(item.date))
  } catch(e){
   
    console.error(e)
  }



  function downloadAllItems(){
    downloadIcsFile(AgendaItemsToIcal(items))
  }

  function downloadItem(item: AgendaItem){
    downloadIcsFile(AgendaItemsToIcal([item]))
  }

  return (
    <CenterContainer>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Add your event to your calendar</CardTitle>
          <CardDescription>Just with one click</CardDescription>
        </CardHeader>
        <CardContent>
          <Card>
            <CardContent className='pt-15'>
              {items.flatMap((item, index,array) => <>
                  <DateItem itemName={item.name} date={item.date} length={item.length} showAddButton={true} onAddClick={{"ICAL File": () => downloadItem(item), "Google Calendar": () => OpenItemInGoogleCalendar(item) }} />
                  {array.length -1 != index && <Separator orientation={'horizontal'} className='my-4' />}
                </>)}
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button><CalendarDays className='mr-2 h-4 w-4' /> Add to calendar</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={downloadAllItems}>ICAL File</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </CardFooter>
      </Card>
    </CenterContainer>


  )
}

export default App
