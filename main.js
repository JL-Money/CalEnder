// function getAllCookies() {
//     const cookies = document.cookie
//         .split(';')
//         .map(cookie => cookie.split('='))
//         .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
//     return cookies;
// }

// const cookieStorage = {
//     getItem: (item) => {
//         return getAllCookies()[item];
//     },
//     setItem: (key, value) => {
//         document.cookie = `${key}=${value}`;
//     },
// };

// const storageType = cookieStorage;
function createTaskCookie(task, priority, day, time) {
    var date = new Date();
    date.setTime(date.getTime()+ (expiry*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = task + "=" + priority + "/" + day + "/" + time + ";" + expires;
}

function getAllCookies() {
    var decoded_cookie = decodeURIComponent(document.cookie);
	return decoded_cookie.split(';');
}

function readCookie(cname) {
	var name = cname + "=";
	var carr = getAllCookies();
	for(var i=0; i<carr.length;i++){
	    var c = carr[i];
	    while(c.charAt(0)==' '){
		    c=c.substring(1);
	    }
	    if(c.indexOf(name) == 0) {
		    return c.substring(name.length, c.length);
	    }
	}
	return "";
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

function runApp() {
    var all_cookies = getAllCookies();
    for(let i = 0; i <ca.length; i++) {
        //TODO: set each grid to appropriate parameters
    }
}