# navdeepsb.com

This is the repo for my portfolio website. I designed it in [Adobe XD](https://youtu.be/88yRSI_0vSY "Prototype preview") and then sat down to code it by myself. No CMS, themes or CSS frameworks were used.

I used [React](https://facebook.github.io/react/ "React") and [Webpack](https://webpack.github.io/ "Webpack") and basic CSS (SASS, actually) to code the pages. Reason to use Webpack was to have a more organized project structure. Traditionally, all the assets are grouped together based on the file type which does not make any sense. Webpack allowed me to group the assets based on the topic as shown below:

```
app/
    proj1/
        banner.jpg
        style.css
        main.jsx
    proj2/
        banner.jpg
        style.css
        main.jsx
```

Instead of...


```
app/
    js/
        proj1.js
        proj2.js
    css/
        proj1.css
        proj2.css
    img/
        banner1.jpg
        banner2.jpg
    proj1.html
    proj2.html
```


#### Author
[Navdeep Singh Bagga](mailto:navdeepb3191@gmail.com "navdeepb3191@gmail.com")
