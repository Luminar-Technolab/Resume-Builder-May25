import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//addResumeAPI - POST - called by Steps component
export const addResumeAPI = (resume)=>{
  return  commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI - PUT
//addHistoryAPI - POST
//getHistoryAPI - GET
//deleteHistoryAPI - DELETE
