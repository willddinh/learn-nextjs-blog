//output hero section, featured posts
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';



export default function HomePage (props) {
    return <>
        <Hero />
        <FeaturedPosts posts={props.posts} />
        </>
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}