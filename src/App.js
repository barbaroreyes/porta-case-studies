import screen1 from './Home_Page.jpeg'
import screen2 from './player.jpeg'
import profile from './profile.jpeg'
import screens from './movil_screens.jpg'

import interviews from './user_interview_picture.jpg'
import './App.css';

function App() {
  return (
    <div  className="App">
     <header >
      
     <div className="name">
     <h1>Portafolio Music Player</h1> 
     <h2 > Case Study </h2>
     </div>
      <div className='name'>
      <h1> Your Playlists Place</h1>
      </div>
      </header>
      <div className='conta'>
      <main>
      <div className='problem'>
      <h1>OVERVIEW:</h1>
      <p>As a music lover for some time, I doubt how it would be the experience of enjoying all the music of my choice without having to change the streaming platform. From this moment I dedicated myself to finding out through a survey to find answers in the real world; and that it will not stay only in my imagination</p>
     </div>
   

 <div className='problem'>
      <h1>SOLUTION:</h1>
      <p>The objective of this app is to provide the possibility of enjoying all your 
        favorite music in one place by creating playlists from different platforms.</p>
     </div>
     <div className='problem'>
      <h1>Research:</h1>
      <ul>
        <li>Surveys</li>
        <li>Competitive Analysis</li>
        <li>User Interviews</li>
      </ul>
     </div>
     <div className='problem'>
      <h1>Competitive Analysis:</h1>
      <ul>
        <li>Surveys</li>
        <li>Competitive Analysis</li>
        <li>User Interviews</li>
      </ul>
     </div>
     <div className='problem'>
      <h1>User Interviews:</h1>
      <ul>
        <li>Surveys</li>
        <li>Competitive Analysis</li>
        <li>User Interviews</li>
      </ul>
     </div>
     
      </main>
      <div className='images'>
      <img src ={screen1} alt = 'pictur'/>
      <img src ={screen2} alt = 'pictur'/>
      <img src ={profile} alt = 'pictur'/>
      
      <div className='images'>
      <img src ={screen1} alt = 'pictur'/>
      <img src ={screen2} alt = 'pictur'/>
      <img src ={profile} alt = 'pictur'/>
      
      </div>
      <div className='images'>
      
      </div>
      </div>
      
   
      </div>
   
      <footer style={{}}>Footer</footer>
    </div>
  );
}

export default App;
