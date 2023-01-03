import React from 'react'

const About = (props) => {
    
   
   
  return (

    <div className={`container ${props.mode}`} >
        <h1 className='my-3'>About Us</h1>
        <div id="accordion">
  <div className={`card bg-${props.mode}`} >
    <div className="card-header" id="headingOne" >
      <h5 className="mb-0">
        <button className={`btn btn-link ${props.mode}  text-${props.mode==='light'?'dark':'light'}`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls={`collapseOne `} >
          Know about our project
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className={`card-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque, nulla praesentium distinctio cum, maiores iste optio aut temporibus repellat, dolorum facilis. Nulla illo repellendus enim expedita, officia voluptate id vitae amet iusto adipisci rerum non, quis maiores optio quidem esse cum eius ullam ad numquam fuga perspiciatis, quo exercitationem at. Omnis odio fugiat consequatur dicta repudiandae aspernatur, non iure repellat, quibusdam ducimus cupiditate asperiores! Placeat, voluptatum molestiae quaerat nemo perspiciatis eos libero saepe consectetur. Eligendi, beatae ipsa illum modi quod quae officia tenetur facilis dignissimos repudiandae, incidunt quas et in dicta! Laborum officiis recusandae harum laboriosam distinctio autem sed?
      </div>
    </div>
  </div>
  
  
 
</div>


    </div>
  
   
  )
}

export default About
