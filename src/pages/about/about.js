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
                    <li>Like and dislike</li>
                </ul>
                <button><a href='https://github.com/caamag/Mini-Blog' target='blank_'>REPOSITORY</a></button>
            </div>

            <div className='technologies-icons'>
                <h3>TECHNOLOGIES</h3>
                <ul>
                    <li><img src={firebaseIcon} alt="firebase icon" />Firebase</li>
                    <li><img src={reactIcon} alt="react icon" />React.js</li>
                    <li><img src={gitIcon} alt="git icon" />Git</li>
                </ul>
            </div>
        </section>

    </div>

};

export default About; 