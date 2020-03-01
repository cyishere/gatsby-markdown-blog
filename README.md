# About GatsMark

💥 **NOTE**: Unfinished. I'm still working on it.

**GatsMark** is a blog boilerplate with Markdown with GatsbyJS.

## TO DO
- [x] Posts by category;
- [x] Navigation；
- [x] Display all tags in one page;
- [x] Posts by tag;
- [x] Posts by author;
- [ ] Pagination: [Display Paginated Posts](https://egghead.io/lessons/react-display-paginated-posts-using-gatsby);
- [ ] SEO: [https://www.gatsbyjs.org/docs/add-seo-component/](https://www.gatsbyjs.org/docs/add-seo-component/);
- [x] <code>build</code>时由于<code>UIkit</code>会报错，需解决；

I grabbed some articles from [The A.V. Club](https://www.avclub.com/) for dummy content.

## Notes

Because of using the third party js - UIkit, it throw error when build. The solution is changing the default arrow function in <code>layout.js</code> to a React component class, and adding <code>componentDidMount</code> function in it.

```js
class Layout extends React.Component {
    componentDidMount() {
        try {
            this.UIkit = require('uikit');
            this.Icons = require('uikit/dist/js/uikit-icons');
            this.UIkit.use(this.Icons);
        } catch(error) {
            console.log(error);
        }
    }
    render() {
        return(
            // ......
        )
    }
}
```