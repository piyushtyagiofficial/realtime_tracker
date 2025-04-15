const socket=io()

const usernameInput = document.getElementById("usernameInput");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
    username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter your username first.");
        return;
    }

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                socket.emit("send_location", {
                    username,
                    latitude,
                    longitude,
                });
            },
            (error) => {
                console.error("Error getting location:", error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000,
            }
        );
    }
    usernameInput.value=""; // Clear the input field after setting the username
});


const map=L.map("map").setView([0,0],18)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"Piyush Kumar Tyagi",
}).addTo(map)

const markers={}


socket.on("receive_location",(data)=>{
    const {id, username, latitude, longitude}=data

    map.setView([latitude,longitude])

    if(markers[id]){
        markers[id].setLatLng([latitude,longitude])
    }else {
        markers[id]=L.marker([latitude,longitude]).addTo(map).bindPopup(`<b>${username}</b>`).openPopup();
    }

})

socket.on("user_disconnected",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id])
        delete markers[id]
    }
})

