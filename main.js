
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
    date.setTime(date.getTime()+ (90*24*60*60*1000)); //Cookie expires in 90 days
    var expires = "expires=" + date.toGMTString();
    document.cookie = task + "=" + priority + "/" + day + "/" + time + ";" + expires;
    //cookieStorage.setItem(task, value);
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
    let table = document.getElementById('calender');
    const all_cookies = getAllCookies();
    for(let i = 0; i <all_cookies.length; i++) {
        let curr_cookie = all_cookies[i]; //curr_cookie is of the form: task=priority/day/time;expires=Sat, 14 Jan 2023 16:49:12 GMT
        let key_expire_pair = curr_cookie.split(';');
        let task_value_pair = key_expire_pair[0].split('=');
        let task = task_value_pair[0];
        let values = task_value_pair[1].split("/");
        let priority = values[0];
        let day = values[1];
        let time = values[2];

        alert("You have a "+priority+" priority "+task+" due on "+day+" at "+time);

        let column = day_to_column(day);
        let start_time = parseInt(time);
        let end_time = parseInt(time.split('-')[1]);

        for (let r = start_time; r < end_time; r++) {
            let row = document.getElementById(r.toString());
            row.cells[column].innerHTML = task;
        }
    }
}

function day_to_column(day) {
    if (day === "M") {
        return 1;
    } else if (day === "Tu") {
        return 2;
    } else if (day === "W") {
        return 3;
    } else if (day === "Th") {
        return 4;
    } else if (day === "F") {
        return 5;
    }
    return null;
}