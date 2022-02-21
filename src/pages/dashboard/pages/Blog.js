import React from 'react'
 import {Redirect} from 'react-router-dom'
import {useAuth} from '../../../hooks/ProvideAuth';

function Blog() {
 const {loggedIn} = useAuth();

 return loggedIn?(<div><h2>Blog</h2></div>):(<Redirect to="/home" />)
}
export default Blog;
