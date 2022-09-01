import Header from "./components/Header";
import React, { useState } from "react";
 import {Routes,Route} from "react-router-dom";
 import Auth from "./components/Auth";
 import Blogs from "./components/Blogs";
 import UserBlogs from "./components/UserBlogs";
 import BlogDetail from "./components/BlogDetail";
 import AddBlog from "./components/AddBlog";
  import {useSelector} from "react-redux";
  import { useNavigate } from "react-router-dom";


function App() {

    const navigate=useNavigate();

  const isLoggedIn =useSelector(state=>state.isLoggedIn);
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
    <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
    </main>
  </React.Fragment> 
        
  
};

export default App;
