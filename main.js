
//function getAllCookies() {
//     const cookies = document.cookie
//         .split(';')
//         .map(cookie => cookie.split('='))
//         .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
//     return cookies;
// }

const cookieStorage = {
    getItem: (item) => {
        return getAllCookies()[item];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
};

const storageType = cookieStorage;
function createTaskCookie(task, priority, day, time) {
    var date = new Date();
    date.setTime(date.getTime()+ (90*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = task + "=" + priority + "/" + day + "/" + time + ";" + expires;
    //cookieStorage.setItem(task, value);
}

function submission_confirmation(e) {
    e.preventDefault();
    // TODO: Fill in the rest 

    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;

    console.log("task: " + task);
    console.log("priortiy: " + priority);
    console.log("day: " + day);
    console.log("time: " + time);

    createTaskCookie(task, priority, day, time);

    alert("Task " + task + " priority " + priority + " has been sucessfully added.");
}

