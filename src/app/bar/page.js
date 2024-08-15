import BarChart from "@/components/Bar";

export default function Bar(){
    return(
        <>
         <div className="header">
                  <h1>Bar Chart</h1>
                  <p>Simple Bar Chart</p>
                  </div>
        <section style={{height:"70vh"}}>
        <BarChart/>
        </section>
        
        </>
    )
}