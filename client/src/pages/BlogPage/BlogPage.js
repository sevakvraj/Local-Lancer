import React from 'react';
import styles from './BlogPage.module.css';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const BlogPostCard = ({ post }) => (
  <div className={styles.postCard}>
    <h3>{post.title}</h3>
    <p className={styles.meta}>By {post.author} on {post.date}</p>
    <p className={styles.excerpt}>{post.excerpt}</p>
    <Link to={`/blog/post/${post.id}`} className={styles.readMore}>Read More &rarr;</Link>
  </div>
);

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.header}>
        <h1>The Local Lancer Blog</h1>
        <p>Insights, tips, and stories for our community of local freelancers and businesses.</p>
      </header>
      <div className={styles.postsGrid}>
        {blogPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default BlogPage;
