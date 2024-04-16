import './createPost.css';

import { useAuthentication } from '../../hooks/useAuthernticate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/authcontext';

function CreatePost() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [formError, setFormError] = useState('');
    const [tags, setTags] = useState('');

    const [error, setError] = useState("")

    const { error: authError, loading } = useAuthentication();


    function handleSubmit(e) {
        e.preventDefault();
    }

    return <div className="container create-post-container">
        <h1>Create <span>Post</span></h1>
        <p>Share photos, text posts, ideas and anything content in your mind.</p>

        <form onSubmit={handleSubmit}>
            <label>
                TITLE:<br />
                <input
                    type="text"
                    name='title'
                    placeholder='Write a caption'
                    required
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    id='title-input'
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

            <label>
                BODY:<br />
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
                TAGS:<br />
                <input
                    type="text"
                    name='tags'
                    placeholder='Insert tags for the post'
                    required
                    onChange={(e) => { setTags(e.target.value) }}
                    value={tags}
                    id='tags-input'
                />
            </label><br />

            {loading && <button>LOADING...</button>}
            {!loading && <button>REGISTER</button>}

            {error && <p className='auth-error'>{authError}</p>}
        </form>
    </div>

}

export default CreatePost;