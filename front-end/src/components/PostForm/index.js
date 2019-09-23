import React, { Component } from 'react'
import axios from 'axios'
import "./styles.css"

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            url: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:3001/api/products/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { title, description, url } = this.state;
        return (
            <div className="post-form">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Título</label>
                        <br></br>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Descrição</label>
                        <br></br>
                        <input type="text" name="description" value={description} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>URL</label>
                        <br></br>
                        <input type="text" name="url" value={url} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                 
                </form>
            </div>
        )
    }
}

export default PostForm
