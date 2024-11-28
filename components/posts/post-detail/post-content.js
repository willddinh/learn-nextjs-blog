import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import PostHeader from "./post-header"
import classes from './post-content.module.css'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('js', js);

export default function PostContent(props) {

    const {post} = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        img(image) {
            return <div className={classes.image}><Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} /></div>
        },
        // p(paragraph) {
        //     const {node} = paragraph;
        //     console.log(node.children[0].tagname);
        //     if (node.children[0].tagname === 'img') {
        //         const image = node.children[0];
        //         return <div className={classes.image}>
        //             <Image src={`/images/posts/${post.slug}/${image.properties.src}`} alt={image.alt} width={600} height={300} />
        //         </div>
        //     }
        //     return <p>{paragraph.children}</p>
        // }
        code(code) {
            const {className, children} = code;
            const language = className.split('-')[1]; //className is something like language-js => we need to split it to get the 'js'
            return <SyntaxHighlighter style={atomDark} language={language} children={children}/>
        }
    }
    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
}