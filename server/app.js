const express = require('express');
const bodyParser = require('body-parser')
const fs = require('node:fs/promises')

async function getStoredPosts() {
    const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
  }
  
  function storePosts(posts) {
    return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
  }
  

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/posts', async (req, res) => {
    const storedPosts = await getStoredPosts()
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
    res.json({posts: storedPosts});
})

app.get('/posts/:id', async(req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === req.params.id);
    res.json({post})
})

app.post('/posts', async (req, res) => {
    const storedPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
        ...postData,
        id: storedPosts.length + 1,
    }
    const updatedPosts = [newPost, ...storedPosts];
    await storePosts(updatedPosts)
    res.status(201).json({ message: 'Stored new post.', post: newPost });
})

app.listen(8080, () => {
    console.log("Running on port 8080 💥")
})