import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokemon from '../pokeball.png';

// const Home = () => {
class Home extends Component {
    
    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }


    render(){

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map( post => {
                    return(
                        <div className="post card" key={post.id}   >
                            <img src={Pokemon} alt="A Pokemon"/>
                            <div className="card-content">
                                <Link to={"/"+post.id}>
                                    <span className="card-title red-text">
                                        {post.title}
                                    </span>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                }
            )
        ) : (
            <div className="center">No Posts Yet</div>
        )

        return(
            <div className="container home">
                 <h4 className="center">Home</h4>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eveniet? Corrupti quae dicta soluta iusto perferendis, aspernatur dolores atque sapiente magnam dignissimos harum, fugiat quo facere tempore porro illo nostrum?</p>  */}
                {postList}
            </div>
        )
    }
}

export default Home