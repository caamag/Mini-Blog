import './createPost.css';

import { useAuthentication } from '../../hooks/useAuthernticate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/authcontext';
import { useCreateContent } from '../../hooks/useCreateContent';

function CreatePost() {

    const [image, setImage] = useState('');
    const [userName, setUserName] = useState('');
    const [comments, setComments] = useState([]);
    const [body, setBody] = useState('');
    const [formError, setFormError] = useState(false);
    const [tags, setTags] = useState('');
    const { user } = useAuthValue();
    const navigate = useNavigate();

    const [error, setError] = useState("")

    const { error: authError, loading } = useAuthentication();

    const { inserDocument, response } = useCreateContent('posts');


    function handleSubmit(e) {
        e.preventDefault();

        setFormError(false);
        //url image verification
        try {
            new URL(image);
        } catch (error) {
            alert('A imagem precisa ser uma URL...');
            return;
        }

        //create tag array 
        const tagsArray = tags.split(",").map(tag => {
            return tag.trim().toLowerCase();
        })

        inserDocument({
            image,
            body,
            userName,
            tagsArray,
            userID: user.uid,
            comments,
            createdBy: user.displayName
        });

        //redirect to home page
        navigate("/")
    }

    return <div className="container create-post-container">
        <h1>Create <span>Post</span></h1>
        <p>Share photos, text posts, ideas and anything content in your mind.<br />
            PS: Only admins can delete POSTS.</p>

        <form onSubmit={handleSubmit}>
            <label>
                AUTHOR:<br />
                <input
                    type="text"
                    name='title'
                    placeholder='Author of this post'
                    required
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={userName}
                    id='title-input'
                />
            </label><br />

            <label>
                CONTENT:<br />
                <input
                    type="text"
                    name='body'
                    placeholder='Insert the body for the post'
                    required
                    onChange={(e) => { setBody(e.target.value) }}
                    value={body}
                    id='body-input'
                />
            </label><br />

            <label>
                IMAGE:<br />
                <input
                    type="text"
                    name='image'
                    placeholder='Inser the image URL'
                    required
                    onChange={(e) => { setImage(e.target.value) }}
                    value={image}
                    id='image-input'
                />
            </label><br />

            {response.loading && <button>LOADING...</button>}
            {!response.loading && <button>REGISTER</button>}

            {response.error && <p className='auth-error'>{response.error}</p>}
        </form><br /><br />
    </div>

}

export default CreatePost;