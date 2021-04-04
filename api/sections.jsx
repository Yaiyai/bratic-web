export const getSection = async (id) => {
    const apiURL = process.env.baseURL
    return fetch(`${apiURL}/sections/${id}`)
        .then((data) => data.json())
        .then((section) => section.section)
        .catch((err) => new Error(err))

}