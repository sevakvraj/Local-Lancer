import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';
import styles from './BlogPostPage.module.css';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className={styles.postContainer}>
        <h1>Post not found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className={styles.postContainer}>
      <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.meta}>By {post.author} on {post.date}</p>
      <div 
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </div>
  );
};

export default BlogPostPage;
