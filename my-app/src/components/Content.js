import React, { Component } from 'react'
import css from './css/PostItem.module.css'
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader.js";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoaded: false
      };
    }
    componentDidMount() {
      setTimeout(()=>{
          this.setState({
              isLoaded: true,
          })
      }, 2000)
  }
  render() {
    return (
      <div>
        
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
        {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }



                    <PostItem savedPosts={savedPosts} />


        </div>
      </div>
    )
  }
}

export default Content