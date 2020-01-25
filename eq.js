$("#eqTableBody tr").remove();
var tableBody = $("#eqTableBody");
var row;
$("#getButton").click(function () {
    $("#eqTableBody tr").remove();
    $.get("https://api.orhanaydogdu.com.tr/deprem/live.php?limit=5", function (data, status) {
        var dataResult = data.result;
        for (i = 0; i < dataResult.length; i++) {
            row = $("<tr/>");
            tableBody.append(row);
            row.append($('<td>' + dataResult[i].date + "</td>"));
            row.append($('<td>' + dataResult[i].lokasyon + "</td>"));
            row.append($('<td>' + dataResult[i].depth + "</td>"));
            row.append($('<td> <b>' + dataResult[i].mag + "</b></td>"));
        }
    });
});