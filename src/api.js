var api =
{
    getTasks()
    {
        var url = "http://localhost:8080/tasks";
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;