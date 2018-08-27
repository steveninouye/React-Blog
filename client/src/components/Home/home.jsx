import React, { Component, Fragment } from 'react';

import AddUser from './AddUser';
import BlogList from './BlogList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            blogs: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getBlogs();
    }

    async getBlogs() {
        const response = await fetch('http://localhost:3000/api/blogs');
        const blogs = await response.json();
        this.setState({ blogs });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, content } = this.state;
        const postUrl = 'http://localhost:3000/api/blogs';
        const postObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ title, content, author_id: 1 })
        };
        fetch(postUrl, postObj)
            .then(() => this.getBlogs())
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <h1>Welcome to Blog Blog Blog!</h1>
                <AddUser
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    content={this.state.content}
                />
                <BlogList blogs={this.state.blogs} />
            </Fragment>
        );
    }
}

export default Home;
