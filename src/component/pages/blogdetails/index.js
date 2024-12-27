import React from "react";
import { Link, useParams } from "react-router-dom";
import BlogPosts from "../../blogdata";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const blogPost = BlogPosts.find((post) => post.slug === slug);
  const sanitizedHtml = DOMPurify.sanitize(blogPost.fullDescription);

  if (!blogPost) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="container py-5">
      <h1>{blogPost.title}</h1>
      <img src={blogPost.imgSrc} alt={blogPost.title} className="img-fluid w-100" />
      <p>{blogPost.description}</p>
      <p>
        <strong>Author:</strong> {blogPost.authorName}
      </p>
      <p>
        <strong>Date:</strong> {blogPost.date}
      </p>
      <div
        className="blog-full-description"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      ></div>

      <div className="arrow-right">
        <Link to="/blog" className="link arrow-right">
          <i className="fas fa-solid fa-arrow-right"></i> 
          <p>Back to Blog</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
