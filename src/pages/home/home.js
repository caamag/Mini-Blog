import './home.css'

//hooks
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, collectionGroup } from 'firebase/firestore';
import 'firebase/firestore';
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBGLBmTqvO98NQtW_w86djsk4zzlaU4Z2Y",
    authDomain: "miniblog-98f6f.firebaseapp.com",
    projectId: "miniblog-98f6f",
    storageBucket: "miniblog-98f6f.appspot.com",
    messagingSenderId: "740036450506",
    appId: "1:740036450506:web:384e14461f0a56325dbc33"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

function Home() {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    //get posts
    useEffect(() => {
        const fetchPosts = async () => {
            const postCollection = collection(db, 'posts');
            try {
                const querySnapshot = await getDocs(postCollection);
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postsData);
            } catch (error) {
                return;
            }
        }
        fetchPosts();
    }, [db]);

    console.log(posts);


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


