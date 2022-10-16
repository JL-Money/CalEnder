function submission_confirmation(e) {
    e.preventDefault();
    // TODO: Fill in the rest 


    var task = document.getElementById("task").value
    var priority = document.getElementById("priority").value
    var day = document.getElementById("day").value
    var time = document.getElementById("time").value

    var tbl = document.getElementById('calender');

    var row = document.getElementById("tbl").rows;



    console.log("task: " + task)
    console.log("priortiy: " + priority)
    console.log("day: " + day)
    console.log("time: " + time)

    alert("Task has been sucessfully added.")
}
