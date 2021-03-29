import React from 'react';
import { useSelector } from 'react-redux';

function Search2(props) {

    const storeProps = useSelector(state => {
        return state
    })

    const filteredPosts = storeProps.search.filteredPosts

    let postsMapped

    if (filteredPosts.length > 0) {
        postsMapped = filteredPosts.map(post => {
            return (
                <div key={post.id} className="searchResultPost">
                    <li>
                        <h3>{post.attributes.title}</h3>
                    </li>
                </div>
            )
        })
        return (
            <div key={props.search} className="searchPage">
                <div>
                    <ul>{postsMapped}</ul>
                </div>
            </div>
        );

    } else {
        return(
            <div>NO POSTS AT THIS TIME</div>
        )
    }
}

export default Search2;