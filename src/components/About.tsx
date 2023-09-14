export default function About(){

  return (
    <div className="flex flex-col h-screen bg-red-200 px-24">
      <div className='container h-full mt-28'>
        <div className="left">
          <h1 className="title text-black">
        Freelance. <br/>
        Fullstack. <br/>
        Engager. <br/>
          </h1>
          <div className="buttonWrapper">
            <div className="label">
            Contactez nous
            </div>
            <button className="btn text-black">GO</button>
          </div>
        </div>
        <div className="right">
          <div className="teammate one">
            <div className="vert">Julien</div>
            <div className="horiz">
              <span className="name">Julien</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
          <div className="teammate two">
            <div className="vert">Moh</div>
            <div className="horiz">
              <span className="name">Moh</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
          <div className="teammate three">
            <div className="vert">Erik</div>
            <div className="horiz">
              <span className="name">Erik</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
        </div>

      
      </div>
      <div className="footer">
        <h1 className="title">Force de proposition</h1>
        <ul className="list">
          <li>Centrer user</li>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Devops</li>
        </ul>
      </div>
    </div>
  )
}


