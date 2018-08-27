import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blogs = !props.blogs ? (
        <tr>
            <td colSpan="4">Loading...</td>
        </tr>
    ) : (
        props.blogs.map((blog) => (
            <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.content}</td>
                <td>{blog.author_id}</td>
                <td>
                    <Link to={`/blog/${blog.id}`}>
                        <button>See Details</button>
                    </Link>
                </td>
            </tr>
        ))
    );
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>{''}</th>
                </tr>
            </thead>
            <tbody>{blogs}</tbody>
        </table>
    );
};

export default BlogList;
