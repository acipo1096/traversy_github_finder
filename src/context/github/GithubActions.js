import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// create instance of axios, variable can be any name
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

// Get search results
// Export to call from component(s)

export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    });

    const response = await github.get(`/search/users?${params}`)
    return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data}
}

// STEPS TO BE COMPLETED ON MY LAPTOP

// npm i axios

// DEPLOYING VIA VERCEL

/*

1. Register at vercel.com/signup with Github
2. New Project
3. Import project repo and configure. Preset is Create React App
4. Deal with .env - manually copy in key/value pairs and click "Add"
5. Click Deploy

*/