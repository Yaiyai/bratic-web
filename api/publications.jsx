export const getPublications = () => {
    return fetch(`${process.env.baseURL}/posts`)
        .then(data => data.json())
        .then(posts => posts.posts.filter(post => post.status === 'publicado'))
        .catch(err => new Error(err))
}

export const getPublicationsByCategory = (category) => {
    return fetch(`${process.env.baseURL}/posts/category/${category}`)
        .then(data => data.json())
        .then(posts => posts.posts.filter(post => post.status === 'publicado'))
        .catch(err => new Error(err))
}

export const getPostBySlug = (slug) => {
    return fetch(`${process.env.baseURL}/posts/post/slug/${slug}`)
        .then(data => data.json())//Ojo que con esta respuesta veo si tiene el redirect
        .catch(err => new Error(err))
}