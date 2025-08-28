import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI - POST - called by Steps component
export const addResumeAPI = async(resume)=>{
  return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI - PUT - called by edit component when update btn clicked
export const editResumeAPI = async(id,resume)=>{
  return await commonAPI("PUT",`${BASEURL}/all-resume/${id}`,resume)
}
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
//getAResumeAPI - GET called by edit component when its open in browser (useeffect)
export const getAResumeAPI = async (id)=>{
  return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})
}