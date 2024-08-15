import GeographyChart from "@/components/geo"

export default function Bar(){
    return(
        <>
         <div className="header">
                  <h1>Geography</h1>
                  <p>Simple Geography Chart</p>
                  </div>
        <section style={{height:"70vh"}}>
        <GeographyChart/>
        </section>
        
        </>
    )
}