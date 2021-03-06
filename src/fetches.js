class FetchAdapter {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get() {
        return fetch(this.baseUrl)
            .then(resp => resp.json())
    }

    getUser(id) {
        return fetch(this.baseUrl + `${id}`)
            .then(resp => resp.json())
    }

    postUser(username) {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ "username": username })
        }

        return fetch(this.baseUrl, options).then(resp => resp.json())
    }

    patch(highscore, rocks, id) {
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "highscore": highscore,
                "rocks_dodged": rocks
            })
        }

        return fetch(this.baseUrl + `${id}`, options)

    }
}
