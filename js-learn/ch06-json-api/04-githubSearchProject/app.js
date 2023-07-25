//app
//project nay mình sẽ thao tác với api của github
//7f16d11fd94772c14e66 - client ID
//16deed9e77908d375f3c6c62b7643cde111a126d - client secrets
//làm bộ api

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form-search").addEventListener("submit",async (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        //tạo bộ công cụ
        let http = new Api();
        let ui = new Ui();

        try{
            let {profile, repos} = await http.getInfor(username);
            ui.render(profile,repos);
            ui.alert("Thành công ròi")
        }catch(error){
            ui.alert("Ko tìm được user", "danger")
        }
    });
})

