function getAllCookies() {
    const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies;
}

const cookieStorage = {
    getItem: (item) => {
        return getAllCookies()[item];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
};

const storageType = cookieStorage;


function submission_confirmation(e) {
    e.preventDefault();
    // TODO: Fill in the rest 


    var task = document.getElementById("task").value
    var priority = document.getElementById("priority").value
    var day = document.getElementById("day").value
    var time = document.getElementById("time").value



    console.log("task: " + task)
    console.log("priortiy: " + priority)
    console.log("day: " + day)
    console.log("time: " + time)

    alert("Task %s priority &s has been sucessfully added.", task, priority)
}
