import './Home.css'

const Home = () => {
  return(
    <>
      <section id='home'>
        <head>
          <title>Goal Oriented Academy</title>
          <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        </head>
        <div className='Container'>
          <h1 className='HeaderText'>Welcome To The Beginning Of Cryptic World</h1>
          <h3 className='H3Text'>
            Welcome to Goa Academy, your goal-oriented learning hub where you’ll dive into the fascinating world of cryptography.<br />
            Whether you're a beginner or looking to expand your knowledge, <br />we're here to guide you every step of the way. 
            Unlock the mysteries of encryption, ciphers, and secure communication as you master the skills that protect our digital 
            world.
          </h3>
        </div>
      </section>
    </>
  )
}

export default Home;
