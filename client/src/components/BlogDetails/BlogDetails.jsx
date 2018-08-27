import React, { Component, Fragment } from 'react';

class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: false
        };
    }

    componentDidMount() {
        this.getBlog();
    }

    async getBlog() {
        const response = await fetch(
            `http://localhost:3000/api/blogs/${this.props.match.params.id}`
        );
        const blog = await response.json();
        this.setState({ blog });
    }

    render() {
        if (!this.state.blog) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <Fragment>
                    <h1>{this.state.blog.title}</h1>
                    <h2>By: {this.state.blog.author_id}</h2>
                    <h3>{this.state.blog.content}</h3>
                </Fragment>
            );
        }
    }
}

export default BlogDetails;
