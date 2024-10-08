"use client";
import { Box, useTheme ,Typography} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {mockDataTeam} from "@/data/mocdata"
import {  tokens } from "../../theme"; 
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";



export default function Team (){
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colums=[
    {field:"id",headerName:"Id"},
    {field:"name",headerName:"name",flex:1,cellClassName: "name-column--cell"},
    {field:"age",headerName:"Age"},
    {field:"email",headerName:"Email",flex:2},
    {field:"access",headerName:"Access",flex:1,headerAlign: "center",

        renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
    },
  ]
    return(
        <>
        <section>
            <div className="header">
                <h1>TEAM</h1>
                <p>Managing the Team Members</p>
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
                <DataGrid rows={mockDataTeam} columns={colums} />
            </Box>
        </section>
        </>
    )
}