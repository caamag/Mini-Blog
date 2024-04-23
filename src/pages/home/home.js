import './home.css'

//hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

//components


function Home() {

    const [query, setQuery] = useState('');
    const [posts] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
    }

    return <div className="container">

        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='Search by Tags'
                value={query}
                onChange={(e) => { setQuery(e.target.value) }} />

            <button>Search</button>
        </form>

        <div className='posts-container'>

            {posts && posts.length === 0 && (
                <div className='post-content'>
                    <h3>No posts made yet...</h3>
                    <Link to={'/post/create'}>Create a new POST</Link>
                </div>
            )}

        </div>

    </div>
};

export default Home;


