console.log("Hello js");

const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.github.com/users/nethsarasahan61/repos?sort=updated&per_page=100", requestOptions)
    .then((response) => response.json())
    .then((result) => {     
        document.getElementById("card-01").innerHTML=`
        <a href="${result[0].html_url}" target="_blank" class="card-link">
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/Lawfirm.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[0].name}</h5>
                        <p class="card-text">
                            ${result[0].description}
                        </p>
                    </div>
                </div>
            </a>
        `
        document.getElementById("card-02").innerHTML=`
        <a href="${result[1].html_url}" target="_blank" class="card-link">
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/weatherApp.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[1].name}</h5>
                        <p class="card-text">
                            ${result[1].description}
                        </p>
                    </div>
                </div>
            </a>
        `
        document.getElementById("card-03").innerHTML=`
        <a href="${result[2].html_url}" target="_blank" class="card-link">
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/chatBot.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[2].name}</h5>
                        <p class="card-text">
                            ${result[2].description}
                        </p>
                    </div>
                </div>
            </a>
        `
        document.getElementById("card-04").innerHTML=`
        <a href="${result[17].html_url}" target="_blank" class="card-link">
            <div class="card shadow-sm rounded-5">
                <img src="assessts/imgs/taxCalc.png" alt="Card Image" class="card-img-top rounded-top-5" height="250" style="object-fit: cover; width: 100%"/>
                    <div class="card-body">
                        <h5 class="card-title">${result[17].name}</h5>
                        <p class="card-text">
                            ${result[17].description}
                        </p>
                    </div>
                </div>
            </a>
        `
    })
    .catch((error) => console.error(error));

    function btnSendOnAction(){
        const name=document.getElementById("user-name").value
        const email=document.getElementById("user-email").value
        const msg=document.getElementById("msg-area").value
        if(name===""){
            return;
        }else if(email===""){
            return;
        }else if(msg===""){
            return;
        }
        
        Swal.fire({
        title: "Message Successfully Sent!",
        icon: "success",
        showClass: { popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
        ` },
        hideClass: { popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
        ` }
        });        
        document.getElementById("user-name").value=""
        document.getElementById("user-email").value=""
        document.getElementById("msg-area").value=""
    }