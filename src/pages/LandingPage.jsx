import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <section style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}  >
      
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center">
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job — all in one.</h4>
            <Link to={'/resume'}>
              <button className="btn btn-primary">Make Your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage