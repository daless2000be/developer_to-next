import { Content } from "next/font/google";
import { title } from "process";

export const initialTickets = [
    {
    id:"1",
    title:"ticket 1",
    content:"this is first ticket",
    status:"DONE" as const,

},
 {
      id:"2",
    title:"ticket 2",
    content:"this is second ticket",
    status:"OPEN" as const,
 },
 {
  id:"3",
  title:"Ticket 3",
  content:"This is the third ticket",
  status:"IN_PROGRESS" as const,
 }
]