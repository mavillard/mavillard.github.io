$(document).ready(function(){
  var table = $("<table></table>").addClass("castas-table");
  var i = 1;
  cond = true
  while(cond) {
    $.ajax({
      url: "/data/painting/" + i + ".html",
      dataType: "html",
      success: function(data, status) {
        var row = $("<tr></tr>").addClass("castas-row").text("result " + i);
        table.append(row);
        i += 1;
      },
      error: function(data, status) {
        cond = false;
      }
    });
  }
  $("#castas-content").append(table);
});
