---
title: 'Building my blog using Amplify & NextJS 13'
excerpt: 'This is a my first blog post and I will be walking through how I built hellobryce.dev in AWS Amplify & NextJS'
coverImage: '/assets/images/chad.png'
date: '2023-04-26T14:17'
ogImage:
  url: '/assets/images/chad.png'
---

### Overview

**tldr** - I wanted to try out NextJS to build this blog site. I deployed on AWS
Amplify.

For the past couple years, the React community has been unable to stop talking
about how bad SPA's are and how SSG / SSR is the **only** way to build web
applications. I largely ignored this due to the React community changing their
minds about how to do web 24/7. This in conjunction with the fact that with all
of these new frameworks like SolidJS, Astro, Qwik, etc., its hard to even know
what is the right choice for web development. Fast forward a few years and now
React does not even mention or reference SPA's in their [start a new
project](https://react.dev/learn/start-a-new-react-project) docs. With all that
said, I decided to see what NextJS was all about and see how SSG compared with
SPAs of the olden days.

This blog will cover how I did it, what I learned, and would it be easier to
just stick with SPAs in the future. 

Also I dabbled with Tailwind for some CSS help 🤮

## Frontend / NextJS


In case you aren't familiar, NextJS supports two different types of
[pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering):
1.  Static Generation (I think this is coined SSG but there is even debate about
    this) - Generated at build time
2.  Server Side Rendering (SSR) - Generated on request


This is a blog and no real need for SSR so static generation we go. The big
takeaways from learning NextJS were **getServerSideProps** for performing
actions 'server-side' in order to generate the HTML and **getStaticPaths** for
some of the internals of converting my blog posts stored as .md files into HTML.


You can view the front end code:
[https://github.com/brymon68/hellobryce.dev](https://github.com/brymon68/hellobryce.dev)
    

## Infrastructure

Playing with CDK always makes me feel so cool. TypeScript is easily one of the
better typed languages and honestly the syntax is fantastic. 

Luckily, I had a [super helpful blog
post](https://aws.amazon.com/blogs/mobile/deploy-a-nextjs-13-application-to-amplify-with-the-aws-cdk/)
to follow from AWS which references [this Github
repo](https://github.com/focusOtter/appsync-cdk-full-backend-with-hosting-amplify).
I had to use an 'alpha' release Amplify CDK construct, but it worked great.

Getting started with cdk is dead simple. I typically aws-cdk globally via: 

``` npm install -g aws-cdk ```

so I can

```cdk init``` 

a new package from there you are off to the races.

View the infrastructure code here:
[https://github.com/brymon68/hellobryce.dev-infra](https://github.com/brymon68/hellobryce.dev-infra)

## Other things I learned

1. Bumped my head on trying to add ```useEffect``` type logic with
   ```getStaticProps```. 

2. I got like 80% finished building before I tried deploying to Amplify only o
   learn that Amplify does not yet support the ```app``` directory structure in
   NextJS. Makes sense since it is beta, but was a d'oh moment

## Things to do in the future for the blog

1. I didnt mention but I write this blog posts in markdown and use some
   boilerplate code that I stole from
   [NextJS](https://github.com/vercel/next.js/tree/canary/examples/blog-starter).
   This works great but I would like the ability to make cool styled code blocks
   which I haven't yet figured out how to do. Also other arbitary components
   that I could somehow sneak in woudl be cool but not sure if that possible.

2. I need to create a footer and about page.

## Coming up next

1. I have been wanting to build a turn key malware RE lab based on SANS610,
   deployed in AWS for when I want to play with malware. I plan to build out
   some CDK with perhaps an API or CLI that I can use to easily deploy and tear
   down infra with ability to share malware, files, and tools via S3. 
   
   Connections to the environment would use SSM / Fleet Manager so we dont have
   to do stupid shit like open RDP to the world and we can also sandbox our
   network connections. 


