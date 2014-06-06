$(document).ready(function(){
  function getDomainName()
  {
    var index = document.URL.lastIndexOf("/");
    var domain = document.URL.substring(0, index + 1);
    return domain;
  }
  
  var table = $("<table></table>").addClass("castas-table");
  for(var i = 1; i <= 48; i++) {
    (function(k) {
      var painting_url = getDomainName() + "data/painting/" + k + ".json"
      $.ajax({
        url: painting_url,
        dataType: "json",
        success: function(data, status) {
        debugger;
          var row = $("<tr></tr>").addClass("castas-row");
          var title = '<a href="' + painting_url + '">' + data['title'] + '</a>';
          var col1 = $("<td></td>").addClass("castas-col").html(title);
          var author = '<a href="' + data['author_url'] + '">' + data['author'] + '</a>';
          var col2 = $("<td></td>").addClass("castas-col").html(author);
          var col3 = $("<td></td>").addClass("castas-col").text(data['year']);
          row.append(col1);
          row.append(col2);
          row.append(col3);
          table.append(row);
        },
        error: function(data, status) {
          console.log("Error: url " + url + "not found.");
        }
      });
    })(i);
  }
  $("#castas-content").append(table);
  
  $.ajax({
    url: getDomainName() + "castas_lod.json",
    dataType: "text",
    success: function(data, status) {
      $("#castas-jsonld").text(data);
    },
    error: function(data, status) {
      console.log("Error: url " + url + "not found.");
    }
  });
});
