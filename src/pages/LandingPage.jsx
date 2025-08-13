import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <section className="container-fluid fisrt" style={{width:'100%',height:'450px',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}  >
      
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgb(255,255,255,0.5)"}}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job — all in one.</h4>
            <Link to={'/resume'}>
              <button className="btn text-light" style={{backgroundColor:'purple'}}>Make Your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className="tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="tools" />
          </div>
        </div>
      </section>
      <section className="second" style={{width:'100%',height:'450px',backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}  >
      </section>
      {/* testimony */}
      <section className="tools p-5">
        <h1 className='text-center my-3'>Testimony</h1>
        <div className='row align-items-center p-5'>
          <div className="tool-content col-12 col-md-6 p-5">
            <h3 className='mb-5'>Trusted by professionals worldwide.</h3>
            <p className='fs-5'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage