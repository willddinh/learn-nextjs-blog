import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/jason.jpg" alt="An image showing Jason" width={1000} height={1000} />
        </div>
        <h1>Hi, I'm Jason</h1>
        <p>I'm 2 years old, I just learn to speak - and this time I learn Nextjs</p>
    </section>
}