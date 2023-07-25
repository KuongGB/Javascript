//client_id="7f16d11fd94772c14e66"
//client_secrets="16deed9e77908d375f3c6c62b7643cde111a126d"

//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}
//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}

class Api{
    constructor(){
        this.client_id="7f16d11fd94772c14e66";
        this.client_secrets="16deed9e77908d375f3c6c62b7643cde111a126d";
    }
    async getInfor(username){
        //lấy profile
        let profile = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secrets}`
        ).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        });


        //lấy repos
        let repos = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secrets}`
        ).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        });

        return {
            profile,
            repos,
        };
    }
}

//test
// let http = new Api();
// http.getInfor("lehodiep").then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })