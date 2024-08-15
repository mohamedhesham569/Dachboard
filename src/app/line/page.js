import LineChart from "@/components/Line"

export default function Bar(){
    return(
        <>
         <div className="header">
                  <h1>Line Chart</h1>
                  <p>Simple Line Chart</p>
                  </div>
        <section style={{height:"70vh"}}>
        <LineChart/>
        </section>
        
        </>
    )
}