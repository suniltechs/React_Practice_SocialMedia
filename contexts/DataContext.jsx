import { createContext, useState, useEffect } from "react";
import useWindowSize from '../src/hooks/useWindowsize';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    });
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const { width } = useWindowSize();

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        const filterResult = posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filterResult.reverse());
    }, [posts, search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = (posts.length ? (Number(posts[posts.length - 1].id) + 1) : 1).toString();
        const newPost = { id, title: postTitle, date: new Date().toLocaleDateString(), body: postBody };
        setPosts([...posts, newPost]);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    };

    const handleEdit = (id) => {
        const updatedPost = {
            id: id.toString(),
            title: editTitle,
            date: new Date().toLocaleDateString(),
            body: editBody,
        };
        setPosts(posts.map((post) => (post.id.toString() === id.toString() ? updatedPost : post)));
        setEditTitle('');
        setEditBody('');
        navigate('/');
    };

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id.toString() !== id.toString()));
        navigate('/');
    };

    return (
        <DataContext.Provider value={{
           title : 'Social Media', width, search, setSearch, posts,
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
            handleDelete, handleEdit, editTitle, setEditTitle,
            editBody, setEditBody, searchResult
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
