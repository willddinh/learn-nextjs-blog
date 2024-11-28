import Head from 'next/head';

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostsFiles } from "../../lib/posts-util";
import { getPostData } from "../../lib/posts-util";

export default function PostDetailPage (props) {
    return <>
    <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
    </Head>
    <PostContent post={props.post}/></>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const post = getPostData(slug);

    return {
        props: {
            post,
            slug: slug
        },
        revalidate: 600 // refresh data every 10 minutes after deployment
    }
}

export function getStaticPaths() {

    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths:slugs.map(slug => ({params: {slug: slug}})),
        fallback: false,
    };
}