"use client";
import { Box, useTheme } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import {mockDataInvoices} from "@/data/mocdata"
import {  tokens } from "../../theme"; 

export default function Invoice (){


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colums=[
      {field:"id",headerName:"Id"},
      {field:"name",headerName:"name",flex:1,cellClassName: "name-column--cell"},
      {field:"phone",headerName:"Phone Number",flex:1},
      {field:"email",headerName:"Email",flex:1},
      {field:"cost",headerName:"Cost",cellClassName: "name-column--cell"},
      {field:"date",headerName:"Date"},
     
    ]
      return(
          <>
          <section>
              <div className="header">
                  <h1>INVOICES</h1>
                  <p>List of Invoice Balances</p>
                  </div>
              
              <Box m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}>
                  <DataGrid rows={mockDataInvoices} columns={colums}  components={{ Toolbar: GridToolbar }}/>
              </Box>
          </section>
          </>
      )
}