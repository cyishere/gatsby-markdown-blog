---
path: "how-to-build-this-markdown-gatsby-blog-from-scratch"
title: "How To Build This Markdown-Gatsby-Blog-From-Scratch"
author: "CY"
date: "2020-02-17"
category: "coding"
hero: "images/gatsby-markdown.jpg"
tags: ["markdown", "gatsbyjs", "reactjs"]
---

## Install a Gatsby starter

In case you're using <code>npm</code>, please replace the <code>yarn add</code> to <code>npm install --save</code>.

Change the <code><new-app-name></code> into your project name.

```sh
gatsby new <new-app-name> https://github.com/gatsbyjs/gatsby-starter-hello-world
```

## Install Plugins to Transformer Markdown with Gatsby

```sh
yarn add gatsby-source-filesystem gatsby-transformer-remark
```

And a CSS Framework.

```sh
yarn add gatsby-plugin-sass node-sass

# And

yarn add uikit
```

Then configure the <code>gatsby-config.js</code>. And create new folders <code>./content/posts/</code>.

Add to deal with the code block.

```sh
yarn add gatsby-remark-prismjs prismjs
```