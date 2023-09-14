import { MenuReferences } from "@/app/strings";

export default function About(){

  return (
    <div className="flex flex-col h-screen px-40">
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
            <button className="btn text-black"><a href={"#" + MenuReferences.CONTACT}>GO</a></button>
          </div>
        </div>
        <div className="right">
          <div className="teammate one child">
            <div className="vert">Julien</div>
            <div className="horiz">
              <span className="name">Julien</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
          <div className="teammate two child">
            <div className="vert">Mohammed</div>
            <div className="horiz">
              <span className="name">Mohammed</span>
              <div className="topics">
                <strong>100</strong>
                <span>TOPICS</span>
              </div>
            </div>
          </div>
          <div className="teammate three child">
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
        <h1 className="title">Nous travaillons avec des technologies robustes</h1>
        <ul className="list">
          <li>React</li>
          <li>Node</li>
          <li>Next</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  )
}


