import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI - POST - called by Steps component
export const addResumeAPI = (resume)=>{
  return  commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI - PUT
//addHistoryAPI - POST
export const addDownloadHistoryAPI = (resume)=>{
  return  commonAPI("POST",`${BASEURL}/history`,resume)
}
//getHistoryAPI - GET
//deleteHistoryAPI - DELETE
