import { initialTickets } from "../../../data"



type TicketPageProps = {
    params:{
        ticketId:string
    }
}

const TicketPage = ({params}:TicketPageProps)=>{
const ticket= initialTickets.find((ticket)=>ticket.id === params.ticketId)

if(!ticket){
    return <div>Ticket no found</div>
}

  return(
    <div>
   <h2 className="text-lg">{ticket.title} </h2>
   <h2 className="text-SM">{ticket?.content} </h2>


    </div>

    )
}

export default TicketPage