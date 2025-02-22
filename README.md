 ## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`


## Notes

git init
git branch -M main
git add .
git commit -m ""
git remote add origin ""
git push origin main

npm - is a package manager of node.
npm init
package.json is configuration file for npm.
Install dependenties
Bundler - helps production ready application(webpack, parcel, vite)
parcel
npm install -D parcel
caret and tilde
transitive dependency
Node-modules - collection of dependendies
if have package.json and lock.json you can install again node-modules. no need to push it GitHub or production.
create gitignore file
what is npx?
npx parcel index.html - parcel execute the server for us run the app local.
cdn link is not preferred way to bring react into project, its better to have in inside of node-modules. install as a package. (npm i react, react-dom)
now no longer need the cdn link
import react and react-dom from node-modules.
add type='module for script tag to accept import/export
you can build your app using parcel, (npx parcel build index.html). remove in package.json file main:app.js line. 
add browserlist in package.json using package. browserlists
finally we created create-react-app by ourself.



