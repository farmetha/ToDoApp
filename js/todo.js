$(document).ready(() => {
    var database = firebase.database();

    /**
     * Push the value from the form to the firebase db.
     */
    $("#todoForm form").on("submit", event => {
        event.preventDefault();
        let todo = $("#todo").val().trim();
        database.ref("/todos").push(todo);
        $("#todo").val("");
    });

    /**
     * Append the todo to the list
     */
    database.ref("/todos").on("child_added", child => {
        let name = child.val();
        let li = $("<li class='list-group-item'>");
        let checkbox = $("<input type='checkbox' />");
        let label = $("<label>");
        //text should prevent xss
        label.text(name)
        li.append(checkbox, label);
        $("#todoList ul").append(li);
    });

});
