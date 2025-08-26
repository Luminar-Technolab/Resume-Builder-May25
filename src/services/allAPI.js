import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI - POST - called by Steps component
export const addResumeAPI = async(resume)=>{
  return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI - PUT

//addHistoryAPI - POST - called by Preview component when finish button clicked
export const addDownloadHistoryAPI =async (resume)=>{
  return await commonAPI("POST",`${BASEURL}/history`,resume)
}
//getHistoryAPI - GET : called by history component when its page open in browser (useeffect)
export const getHistoryAPI = async ()=>{
  return await commonAPI("GET",`${BASEURL}/history`,{})
}
//deleteHistoryAPI - DELETE called by history when delte btn is clicked
export const deleteHistoryAPI = async (id)=>{
  return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}
