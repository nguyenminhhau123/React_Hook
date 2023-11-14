import "./App.scss";
// import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import axios from "axios";
import { useState, useEffect } from "react";
import queryString from "query-string";
function App() {
  let [postList, setPostList] = useState([]);
  let [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  let [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    let postListData = async () => {
      try {
        // limit = 10 page =1
        let paramsString = queryString.stringify(filters);
        let requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await axios.get(requestUrl);
        // const responseJson = response.json();
        console.log("data", response);
        // const { data } = responseJson;
        setPostList(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error(error);
      }
    };
    postListData();
  }, [filters]);
  let handleOnChangePage = (newPage) => {
    console.log("newPage", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };
  return (
    <div className="App">
      {/* <TodoList /> */}
      <h2>POST-LIST</h2>
      <PostList postList={postList} />
      <Pagination pagination={pagination} onChangePage={handleOnChangePage} />
    </div>
  );
}

export default App;
