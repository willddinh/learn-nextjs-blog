//output hero section, featured posts

import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';



export default function HomePage (props) {
    return <>
        <Head>
            <title>Jason's Blog</title>
            <meta name="description" content="I post about what I learn." />
        </Head>
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