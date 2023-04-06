import React, { useEffect, useState } from 'react';
import PostList from './post.list';
import PostSearch from './post.search';
import Pagination from '../commons/pagination';
import queryString from "query-string";

function PostContainer() {
    const [postList, setPostList] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11
    });

    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10
    });

    useEffect(() => {
        async function getPostList() {
            try {
                const paramString = queryString.stringify(filter);
                const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await (await fetch(url)).json();
                console.log(response)
                setPostList(response.data);
                setPagination(response.pagination);
            } catch (e) {
                console.log(e.message);
            }
        }

        getPostList();
    }, [filter])

    function handlePageChange(newPage) {
        setFilter({
            ...filter,
            _page: newPage
        })
    }

    function handleSearch(search) {
        setFilter({
            ...filter,
            _page: 1,
            title_like: search.searchTerm
        })
    }

    return (
        <div>
            <PostSearch onSubmit={handleSearch} />
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PostContainer;