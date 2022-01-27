# Traning Materials: Sample Arc Application

## How to use this repository:
### Create Arc Fusion Project
- Install the arc fusion cli `npm i -g @arc-fusion/cli`
- Make sure that docker is downloaded from [here](https://www.docker.com/products/docker-desktop)
- Create folder for project `mkdir sample-arc-app`
- Run `fusion init` to get the basic project skeleton
- Add env keys (ask your EM) to the `.env` file
- Create a file under `mocks` called `user`, and paste in this information:
```
{
  "displayName": "Local Developer",
  "permissions": {
    "PageBuilder": {
      "global": [
        "W",
        "D",
        "P",
        "VRP",
        "ERP",
        "DT"
      ]
    }
  }
}
```
Note that if this is not working, replace the mocks folder with this one: https://drive.google.com/drive/folders/1BIFc5bBq1YbPnouqDFLRtc_ox994rOtB?usp=sharing
- Make sure Docker is started and running on your computer (just search for it in your applications folder and click on it)
- Run `fusion start`, and ensure that you can go to `http://localhost/pagebuilder/pages/` and create a new page

### Migrate the spec sources project from React to Arc
1. Copy and paste components from React project to Arc
	- Place components in components/features/{name of page}
	- In another terminal tab, run `fusion rebuild`
        - On pagebuilder, create a new page (with `/homepage` as the URI) and add `Home.jsx` as a block to the page. Publish the page.
        - Ensure that you can see the page at `http://localhost`

2. Create content source to get 10 recent authors from spectator
	- I.e. `content/sources/author-service.js`
        - Look under `content/sources` on the spec website's codebase to see an example content source
        - [View the arc author API documentation here](https://spectator.arcpublishing.com/alc/docs/swagger/?url=./arc-products/authors.json)

3. Connect the content source to the React project using `GlobalAuthorData.js`:
        - Create a file called `GlobalAuthorData.js` under `features/GlobalData/`, and paste in:
```js
import React from "react"
import { useContent } from "fusion:content";

const GlobalAuthorData = fetchArgs => WrappedComponent =>
  function WrapComponent(props) {
    const { source, query, filter } = fetchArgs;
    const authorData = useContent({
      source: source,
      query: query,
    });

    return (
      <WrappedComponent {...props} authorData={authorData} source={source} />
    );
  };
  
  export default GlobalAuthorData;
```

This is a custom built react hook that wraps the react component it is called on with the data that we get from the `useContent()` function. The `useContent()` function is a built-in fusion function which allows us to directly get data from content sources without using resolvers/templates.

In the `Home.jsx` file, you can import the `GlobalAuthorData` function and then call it like so:

```js
const AuthorsWithData = GlobalAuthorData({
    source: "author-service",
    query: {},
    filter: authorFilter
  })(SourcesList);
```
Replace the reference to `SourcesList` in the React code with `AuthorsWithData` (this is our new wrapped component).

Now that you have the data in `SourcesList` (as `props.articleData`), display the data dynamically on the site.

4. Next, you want to make the authors clickable, and display JSON data of the specific author on a new page.
- First, create a new component in `features/AuthorPage/AuthorInfoTemplate.jsx`, and put this inside it:
```js
import React from "react"
import Consumer from "fusion:consumer"


@Consumer
class AuthorInfoTemplate extends React.Component {
	render() {
		return (
			<div>{JSON.stringify(this.props.globalContent)}</div>
		)
	}
}

export default AuthorInfoTemplate;
```

We have to use a class component here, because it supports the `@Consumer` tag, which is required for our component to receive data from a resolver.

On pagebuilder, go to the templates tab, and create a new template with this component as the only block on the page.

- Next, we need to create a content source to give us the data associated with an author based on their first, middle, and last name. Use the content source you created earlier, content sources from the site, and the Arc author API documentation](https://spectator.arcpublishing.com/alc/docs/swagger/?url=./arc-products/authors.json) as references to create this.

- Create a resolver to connect the content source and the template. 

Use this regex string: `^/authors/([\w.]*)(?:.?-)*([\w.]*)-(?:.?-)?(\w*)/`

As default content source, select the content source you just created.

For each variable, choose the pattern option, and 1, 2, and 3 respectively for the first, middle, and last name.

For template, select the template you just created for the author page.

5. Finally, make each author name on the homepage dynamically link to the template page in the format `/authors/firstname-middlename-lastname` or `/authors/firstname-lastname`. You can accomplish this with some simple string concatenation.

Now, you should be able to see author data on the homepage, and click on each author to see more detailed information about them.

## 🎉 You are done!

