import './createPost.css';

import { useAuthentication } from '../../hooks/useAuthernticate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/authcontext';
import { useCreateContent } from '../../hooks/useCreateContent';

function CreatePost() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [formError, setFormError] = useState(false);
    const [tags, setTags] = useState('');
    const { user } = useAuthValue();

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
            alert('A imagem precisa ser uma URL...')
            setFormError(true);
        }

        //create tag array 
        const tagsArray = tags.split(",").map(tag => {
            tag.trim().toLowerCase();
        })

        if (formError) { return }

        inserDocument({
            title,
            image,
            body,
            tagsArray,
            userID: user.uid,
            createdBy: user.displayName
        });

        //redirect to home page
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

            {response.loading && <button>LOADING...</button>}
            {!response.loading && <button>REGISTER</button>}

            {response.error && <p className='auth-error'>{response.error}</p>}
        </form>
    </div>

}

export default CreatePost;