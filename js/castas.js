$(document).ready(function(){
  var table = $("<table></table>").addClass("castas-table");
  for(var i = 1; i <= 48; i++) {
    (function(k) {
      $.ajax({
        url: document.URL + "data/painting/" + k + ".json",
        dataType: "json",
        success: function(data, status) {
          var row = $("<tr></tr>").addClass("castas-row");
          var col1 = $("<td></td>").addClass("castas-col").text(data['title']);
          var col2 = $("<td></td>").addClass("castas-col").text(data['author']);
          var col3 = $("<td></td>").addClass("castas-col").text(data['year']);
          row.append(col1);
          row.append(col2);
          row.append(col3);
          table.append(row);
        },
        error: function(data, status) {
          console.log('Error');
        }
      });
    })(i);
  }
  $("#castas-content").append(table);
  
  $.ajax({
    url: document.URL + "castas_lod.json",
    dataType: "text",
    success: function(data, status) {
      $("#castas-jsonld").text(data);
    },
    error: function(data, status) {
      console.log('Error');
    }
  });
});
