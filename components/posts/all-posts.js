import { getAllPosts } from '../../lib/posts-util';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

export default function AllPostsPage(props) {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} />
    </section>
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 1800 //set to refresh posts when deployed
    }
}