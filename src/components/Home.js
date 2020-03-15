import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../pokeball.png';
import { connect } from 'react-redux';

// const Home = () => {
class Home extends Component {
    
    render(){
        console.log(this.props);
        const { posts } = this.props;
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

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)