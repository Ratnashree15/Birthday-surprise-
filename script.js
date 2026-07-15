function showLogin() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
}

function checkPassword() {
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "") {
        document.getElementById("error").innerHTML = "Please enter your name.";
        return;
    }

    if (password === "1507") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("birthdayPage").style.display = "flex";

        document.getElementById("wish").innerHTML =
            "🎉 Happy Birthday, " + name + "! 🎉";

        const music = document.getElementById("music");
        music.play().catch(() => {
            alert("Tap anywhere on the page to play the music.");
        });
    } else {
        document.getElementById("error").innerHTML =
            "❌ Wrong Password!";
    }
}

function celebrate() {
    alert("🎉🎂 Happy Birthday! May your wishes come true! 💙");
}
