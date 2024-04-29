import './home.css'
//imgs
import profileImage from './assets/account.png';
import points from './assets/three-points.png';
import whiteHeart from './assets/heart-without-background.png';
import redHeart from './assets/red-heart.png';

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
    const [posts, setPosts] = useState([]);
    const [imageDestiny, setImageDestiny] = useState(false);
    const [heartLike, setHeartLike] = useState(false);

    //get posts
    useEffect(() => {
        const fetchPosts = async () => {
            const postCollection = collection(db, 'posts');
            try {
                const querySnapshot = await getDocs(postCollection);
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    imageDestiny: false, 
                    heartLike: false
                }));
                setPosts(postsData);
            } catch (error) {
                return;
            }
        }
        fetchPosts();
    }, [db]);

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

            {posts.map((post) => (
                <section key={post.id} className='post-container'>
                    <div className='post-author-content'>

                        <img src={profileImage} alt="profile image" />
                        <h4>{post.userName}</h4>
                        <button onClick={() => {
                            if (imageDestiny) {
                                setImageDestiny(false)
                            } else {
                                setImageDestiny(true)
                            }
                        }}><img src={points} alt="" />
                        </button>

                        {imageDestiny && <div className='img-url-container'>
                            <a href={post.image} target='blank'>Ir para a imagem</a>
                        </div>}

                    </div>

                    <img src={post.image} alt="" /><br /><br />

                    <div className='post-author-content'>
                        {!heartLike && <button onClick={() => { setHeartLike(true) }}>
                            <img src={whiteHeart} alt="" />
                        </button>}
                        {heartLike && <button onClick={() => { setHeartLike(false) }}>
                            <img src={redHeart} alt="" className='red-heart' />
                        </button>}
                    </div>
                </section>
            ))}

        </div>

    </div>
};

export default Home;


