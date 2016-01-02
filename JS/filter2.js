/**
 * Created by Dominik on 02.01.2016.
 */
$(document).ready(function() {

    function addRemoveClass(theRows) {

        theRows.removeClass("odd even");
        theRows.filter(":odd").addClass("odd");
        theRows.filter(":even").addClass("even");
    }

    var rows = $("table#myTable tr:not(:first-child)");

    addRemoveClass(rows);


    $("#selectField2").on("change", function() {

        var selected = this.value;

        if (selected != "All") {

            rows.filter("[position2=" + selected + "]").show();
            rows.not("[position2=" + selected + "]").hide();
            var visibleRows = rows.filter("[position2=" + selected + "]");
            addRemoveClass(visibleRows);
        } else {

            rows.show();
            addRemoveClass(rows);

        }

    });
});