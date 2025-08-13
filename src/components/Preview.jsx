import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

function Preview() {
  return (
    <>
        <Box component="section" >
            <Paper elevation={3} sx={{ p: 2, textAlign:'center' }}>
                <h2>Name</h2>
                <h6>Job Title</h6>
                <p><span>location</span> | <span>Email</span> | <span>phone</span></p>
                <p>
                    <Link href={""}> GITHUB </Link> | 
                    <Link href={""}> LINKEDIN </Link> |
                    <Link href={""}> PORTFOLIO </Link>
                </p>
                <Divider>Summary</Divider>
            </Paper>
        </Box>
    </>
  )
}

export default Preview