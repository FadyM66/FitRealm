import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

function Detail() {
  const location = useLocation();
  const post = location.state?.post; // Get the post data passed from the Blogs component
  console.log(post);
  if (!post) {
    return <div>Post not found!</div>; // Handle case where post data is not available
  }

  const [createComment, setCreateComment] = useState({
    comment: "",
  });

  const handleCreateCommentChange = (e) => {
    const { name, value } = e.target;
    setCreateComment({ ...createComment, [name]: value });
  };

  const handleCreateCommentSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    console.log(userId)
    const commentData = {
      post: post.id, // Assuming 'post' contains an 'id' field
      user: userId ? userId : null, // Set to null if userid is not available
      comment: createComment.comment,
      reply: "", // Handle reply logic as needed
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/Blog/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        console.log("Comment submitted successfully.");
        setCreateComment({ comment: "" }); // Reset form after submission
      } else {
        console.error("Error submitting comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <h1 className="text-center">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-2">
              <div className="text-start text-lg-center mb-5">

                <a href="#" className="h5 fw-bold text-dark text-decoration-none mt-2 mb-0 d-block">
                  {post.profile?.full_name}
                </a>
                <p>{post.profile?.bio}</p>
                <ul className="list-inline list-unstyled">
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <i className="fas fa-calendar"></i> {moment(post.date).format("DD MMM, YYYY")}
                  </li>
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <i className="fas fa-eye"></i> {post.view} Views
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-10 mb-5">
              <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
              <hr />

              <div>
                <h3>{post.comments?.length} comments</h3>
                {post.comments?.map((c, index) => (
                  <div key={index} className="my-4 d-flex bg-light p-3 mb-3 rounded">
                    <img
                      className="avatar avatar-md rounded-circle float-start me-3"
                      src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                      style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "50%" }}
                      alt="avatar"
                    />
                    <div>
                      <div className="mb-2">
                        <h5 className="m-0">{c.name}</h5>
                        <span className="me-3 small">{moment(c.date).format("DD MMM, YYYY")}</span>
                      </div>
                      <p className="fw-bold">{c.comment}</p>
                      {c.reply && <p className="">Reply: {c.reply}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply START */}
              <div className="bg-light p-3 rounded">
                <h3 className="fw-bold">Leave a reply</h3>
                <small>Your email address will not be published. Required fields are marked *</small>
                <form className="row g-3 mt-2" onSubmit={handleCreateCommentSubmit}>
                  <div className="col-12">
                    <label className="form-label">Write Comment *</label>
                    <textarea
                      onChange={handleCreateCommentChange}
                      name="comment"
                      value={createComment.comment}
                      className="form-control"
                      rows={4}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Post comment <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
              {/* Reply END */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
