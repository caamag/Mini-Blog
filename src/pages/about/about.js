import './about.css'

//imgs imports
import firebaseIcon from './imgs/firebase-icon.jpeg';
import reactIcon from './imgs/react-icon.jpeg';
import gitIcon from './imgs/git-icon.jpeg';



function About() {

    return <div className="container">

        <section className='content about-title'>
            <h1>About this <span>Project</span></h1>
            <p>This project aims at my personal and professional<br />
                development within the most commonly used web technologies in the market.</p>
        </section>

        <section className='content about-content'>
            <div>
                <h3>FEATURES</h3>
                <ul>
                    <li>Create a new account</li>
                    <li>Sign In/Sign Out</li>
                    <li>Share new posts</li>
                    <li>Make comments</li>
                </ul>
                <button onClick={() => {
                    window.location.href === 'https://github.com/caamag/Mini-Blog'
                }}>REPOSITORY</button>
            </div>

            <div className='technologies-icons'>
                <h3>TECHNOLOGIES</h3>
                <ul>
                    <li><img src={firebaseIcon} alt="" />Firebase</li>
                    <li><img src={reactIcon} alt="" />React.js</li>
                    <li><img src={gitIcon} alt="" />Git</li>
                </ul>
            </div>
        </section>

    </div>

};

export default About; 