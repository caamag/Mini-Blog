import './home.css'

//hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
//components


function Home() {

    const [query, setQuery] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
    }

    return <div className="container">

        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text"
                placeholder='Search by Tags:'
                value={query}
                onChange={(e) => { setQuery(e.target.value) }} />

            <button>Search</button>
        </form>

        <div className='posts-container'>



        </div>

    </div>
};

export default Home;


