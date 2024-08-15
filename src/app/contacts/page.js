"use client";
import { Box, useTheme } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "@/data/mocdata"
import {  tokens } from "../../theme"; 

export default function Contacts (){


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colums=[
      {field:"id",headerName:"Id"},
      {field:"name",headerName:"name",flex:1,cellClassName: "name-column--cell"},
      {field:"phone",headerName:"Phone Number",flex:1},
      {field:"email",headerName:"Email",flex:1},
      {field:"address",headerName:"Address",flex:1},
      {field:"city",headerName:"City"},
      {field:"zipCode",headerName:"ZipCode"},
     
    ]
      return(
          <>
          <section>
              <div className="header">
                  <h1>CONTACTS</h1>
                  <p>List of Contacts for Future Reference</p>
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
                  <DataGrid rows={mockDataContacts} columns={colums}  components={{ Toolbar: GridToolbar }}/>
              </Box>
          </section>
          </>
      )
}