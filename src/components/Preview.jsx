import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({userInput,finish}) {
  
  const [downloadStatus,setDownloadStatus] =useState(false)

  const downloadCV = async()=>{
    //get element for taking screenshot
    // alert("download started")
    const input = document.getElementById("result")
    const canvas = await html2canvas(input,{scale:2})
    const imgURL = canvas.toDataURL('image/png')
    // console.log(imgURL);
    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    //get date 
    const localTimeData = new Date()
    const timeStamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`
    // console.log(timeStamp);
    
    //add download cv to json  using api call
    try{
      const result = await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
      console.log(result);
      setDownloadStatus(true)
    }catch(err){
      console.log(err);      
    }
  }

  return (
    <>
      {
        userInput.personelData.name!="" &&
        <div className='flex flex-column'>
          {
            finish &&

             <div className='d-flex justify-content-center align-items-center mt-5' style={{paddingTop:'200px'}}>
                  {/* download */}
                  <button onClick={downloadCV} className="btn fs-3 text-primary" ><FaFileDownload /></button>
                  {
                    downloadStatus &&
                    <>
                      {/* edit */}
                      <div>  <Edit/> </div>
                      {/* history */}
                      <Link to={'/history'} className="btn fs-3 text-primary" ><FaHistory /></Link>
                    </>
                  }
                  {/* back */}
                  <Link to={'/resume'} className="btn text-primary">BACK</Link>
                </div>
          }
          <Box component="section" >
                <Paper id="result" elevation={3} sx={{ my:5, p: 5, textAlign:'center',width:'600px',height:'700px'}}>
                    <h2>{userInput.personelData.name}</h2>
                    <h5>{userInput.personelData.jobTitle}</h5>
                    <p><span>{userInput.personelData.location}</span> | <span>{userInput.personelData.email}</span> | <span>{userInput.personelData.phone}</span></p>
                    <p>
                        <Link href={userInput.personelData.github}> GITHUB </Link> | 
                        <Link href={userInput.personelData.linkedin}> LINKEDIN </Link> |
                        <Link href={userInput.personelData.portfolio}> PORTFOLIO </Link>
                    </p>
                    <Divider sx={{fontSize:'25px'}}>Summary</Divider>
                    <p className=' text-start'>{userInput.summary} </p>
                    <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
                    <h5>{userInput.education.course}</h5>
                    <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
                    <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
                    <h5>{userInput.experience.jobRole}</h5>
                    <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
                    <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
                    <Stack  justifyContent={'space-evenly'} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
                     { userInput.skills?.map(skill=>(
                          <Button variant="contained" >{skill}</Button>
                     )) }
                    </Stack>
                </Paper>
          </Box>
        </div>
      }
    </>
  )
}

export default Preview