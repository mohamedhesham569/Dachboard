"use client";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../theme"; 
import MenuIcon from '@mui/icons-material/Menu';
import user from "../../public/user.jpg"
import Image from "next/image";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MapIcon from '@mui/icons-material/Map';

export default function Sidebar(){
useEffect(()=>{
const elements = document.querySelectorAll('.box'); 
    
        elements.forEach(element => {
            element.addEventListener('click', function() {
                // Remove 'active' class from all elements
                elements.forEach(el => el.classList.remove('active'));
                
                // Add 'active' class to the clicked element
                this.classList.add('active');
            });
        });

},[])

        

    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [issidebar,setissidebar]=useState(true)
    return(
        <section className="mr-5">
        <Box sx={{ display:"flex" , flexDirection:"column" }}  backgroundColor={colors.primary[400]}>
            <div className={issidebar?"mx-5 my-2":""}>
                <Box sx={{display:"flex", justifyContent:"space-between",margin: "10px 3px",alignItems: "center", textTransform: "capitalize"}}>
                    <h1 className={issidebar?"text-2xl uppercase":"hidden"}>admins</h1>
                    <IconButton onClick={()=>setissidebar(!issidebar)}>
                        <MenuIcon/>
                    </IconButton>
                </Box>

                <Box sx={{display:"flex" , flexDirection:"column",gap:"10px",alignItems:"center",textTransform: "capitalize"}}>
                    <Image src={user} className={issidebar?"user-image":"hidden"}  alt="user-photo"  />
                    <h3 className={issidebar?"font-bold text-lg text-center":"hidden"}>mohamed hisham</h3>
                    <p className={issidebar?"text-sm":"hidden"} style={{color:"#4cceac"}}>VP Fancy Admin</p>
                </Box>


                <Box sx={{display:"flex" , flexDirection:"column",gap:"10px" , marginTop:"20px",fontSize:"12px"}}>
                    <div className="box active ">
                        <Link href="/">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"5px 10px",fontSize:"12px"}}>
                <IconButton className="icon">
                        <HomeIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"} >
                    Dashboard
                    </p>
                </Box>
                </Link>
                </div>
                <p className="cato">Data</p>
                <div className="box  ">
                <Link href="/team">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton  className="icon">
                        <PeopleOutlineIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    Manage Team
                    </p>
                </Box></Link></div>
                <div className="box  ">
                <Link href="/contacts">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton className="icon">
                        <ContactsIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    Contacts Information
                    </p>
                </Box></Link></div>
                <div className="box  ">
                <Link href="/Invoice">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton className="icon">
                        <ArticleIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    Invoices Balances
                    </p>
                </Box></Link></div>
                <p className="cato">Charts</p>
                <div className="box  ">
                <Link href="/bar">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton className="icon">
                        <BarChartIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    Bar Chart
                    </p>
                </Box></Link></div>
                <div className="box  ">
                    <Link href="/line">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton className="icon">
                        <ShowChartIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    line Chart
                    </p>
                </Box></Link></div>
                <div className="box  ">
                    <Link href="/geo">
                <Box sx={{display:"flex",alignItems:"center",gap:"10px",margin:"1px 10px"}}>
                <IconButton className="icon">
                        <MapIcon/>
                    </IconButton>
                    <p className={issidebar?"":"hidden"}>
                    Geography Chart
                    </p>
                </Box></Link></div>
                </Box>
                </div>
        </Box>
        </section>
    )
}