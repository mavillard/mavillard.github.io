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
          var title = '<a property="url" href="' + painting_url + '">' + data['title'] + '</a>';
          var col1 = $("<td id='lala'></td>", {
            "vocab": "http://schema.org/",
            "typeof": "Painting"
          }).addClass("castas-col").html(title);
          var author = '<a property="url" href="' + data['author_url'] + '">' + data['author'] + '</a>';
          var col2 = $("<td></td>", {
            "vocab": "http://schema.org/",
            "typeof": "Person"
          }).addClass("castas-col").html(author);
          year = '<span property="year">' + data['year'] + '</span>';
          var col3 = $("<td></td>", {
            "vocab": "http://schema.org/",
            "typeof": "Number"
            }).addClass("castas-col").html(year);
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
  
  $
});
