import Link from "next/link"


const HomePage = ()=>{
  return(
    <div>
         <h2>Home page</h2>

       <Link href="/tickets" className="underline">
       Go To Tickets
       </Link>

      
    </div>
   

    )
}

export default HomePage