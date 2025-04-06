document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btn").addEventListener("click", function () {
            document.getElementById("Wait").style.display = "flex"
                setTimeout(() => {
                    console.log("Searching for players in a 1 player game :)")




            fetch("http://localhost:8080/Chessv2")
                .then(response => {
                if (response.ok) {
                    window.location.href = "/build";
                } else {
                    console.error("Error fetching /Chessv2:", response.status);
                    document.getElementById("Wait").style.display = "none";
                }
            })
                .then(data => console.log("Response data:", data))
                .catch(error => console.error("Error fetching heartbeat:", error));
                     }, 500);

    });

});

