$(function() {
  var groupSize = 3;


  var previousGroups = [
    [
      "Daniel Hedblad", 
      "Jo Posselt", 
      "Kelly Brofall", 
      "Sirak Tekeste", 
      "Alexander Stangel", 
      "Simone Giertz"
    ],
    [
      "Dagem H",
      "Danijela Froki",
      "Jonathan Lönnqvist",
      "Patrick Gårdinger",
      "Stephanie L",
    ],
    [
      "Anders Lundkvist",
      "Hanna Wilhelmi",
      "Jonatan Agami",
      "Ponny Hästhage",
      "Vanja Frolin",
      "Christoffer Jonsson"
    ],
    [
      "Anna Viggeborn",
      "Dave Garfinkel",
      "Linnéa Lindskog",
      "Tobias Björnberg",
      "Zac Rolz"
    ],
    [
      "Barni Szasz",
      "Joacim Kroon",
      "Lisen Malmsten",
      "Sofie Predikaka",
      "Henrik Baecklund",
      "Diego Fria"
    ],
    [
      "Aki Andersson",
      "Jim Kollevik",
      "Johannes Aronsson",
      "Nella Lisserow",
      "Tracy Alm",
      "Jerome Lai"
    ],
    [
      "Adam Loke",
      "Elin Ståbi",
      "Joel Järvinen",
      "Nathalie Cano",
      "Tue Rossel",
    ],

  ];



  var students = [];
  var constraints = {};

  for (var i = 0; i < previousGroups.length; i++) {
    var group = previousGroups[i];
    for (var j = 0; j < group.length; j++) {
      var GroupMember = group[j];
      constraints[GroupMember] = group;
      students.push(GroupMember);
    }
  }
  var numberOfGroups = Math.floor(students.length / groupSize);


  function generateGroups() {

    var attemptGroupCreation = function() {

      students = shuffleArray(students);
      var newGroups = [];

      // All the groups start empty
      for (var i = 0; i < numberOfGroups; i++) {
        newGroups[i] = [];
      }
  
      for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var group = newGroups[i % numberOfGroups];
        if (!hasOnlyNewGroupMembers(student, group)) {
          return;
        };
        group.push(student);
      }
      
      return newGroups;
    }


    for (var tries = 0; tries < 100000; tries++) {
      var newGroups = attemptGroupCreation();
      if (newGroups) {
        console.log("Found one after " + tries + " tries.")
        return newGroups;
      }
    }

    console.log("Couldn't find any");
  }


  newGroups = generateGroups();

  // Returns whether the student's group contains
  // all new Group members for them
  function hasOnlyNewGroupMembers(student, group) {
    for (var i = 0; i < group.length; i++) {
      var GroupMember = group[i];
      if (GroupMember != student) {
        if (constraints[student].indexOf(GroupMember) != -1) {
          return false;
        }
      }
    }
    return true;
  }


  // Uses the Fisher-Yates algorithm for shuffling
  // Check out sweet visualizations here: http://bost.ocks.org/mike/shuffle/
  function shuffleArray(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }


  // Create a table
  var tableNode = $("<table/>");
  for (var i = 0; i < 2; i++) {
    var headerNode = $("<tr/>");
    for (var column = 0; column < numberOfGroups; column++ ) {
      headerNode.append("<th>Group " + String.fromCharCode(65 + column) + "</td>");
    }
    tableNode.append(headerNode);
  }
  for (var row = 0; row < groupSize + 1; row++ ) {
    var rowNode = $("<tr/>");
    for (var column = 0; column < numberOfGroups; column++ ) {
      rowNode.append("<td/>");
    }
    tableNode.append(rowNode);
  }
  $("#groupList").append(tableNode);


  var currentGroupShown = 0;
  var timePerPerson = 2000; // in ms
  var groupNames = generateRandomName(numberOfGroups);
  function showNextGroup() {
    var group = newGroups[currentGroupShown];
    var groupName = groupNames[currentGroupShown];
    var groupNumber = String.fromCharCode(65 + currentGroupShown);

    $("#current-group-number").html(groupNumber);
    $($($("#groupList tr")[1]).find("th")[currentGroupShown]).html(groupName);
    $("#current-group").fadeIn(function() {
      $("#current-group-name span").html(groupName);
      $("#current-group-name").delay(500).fadeIn();
      for (var i = 0; i < group.length; i++) {
        (function() {
          var student = group[i];
          $($($("#groupList tr")[i + 2]).find("td")[currentGroupShown]).html(student);
          setTimeout(function() {
            var node = $("<li>" + getImageTagForStudent(student) + student + "</li>");
            node.hide();
            node.appendTo($("#current-group .members")).fadeIn();
          }, timePerPerson * i + timePerPerson);
        })();
      }
      currentGroupShown++;
      setTimeout(function() {
        $("#current-group").fadeOut(function() {
         $("#current-group-name").hide();
         $("#current-group .members").empty();

         if (currentGroupShown < numberOfGroups) {
           showNextGroup();
         } else {
          $("#current-group").fadeOut(function() {
            $("#groupList").fadeIn();
          });
         }
        });
      }, (group.length + 2) * timePerPerson);
  
    });
  }

  function getImageTagForStudent(student) {
    var url = student.split(" ")[0] + "_" + student.split(" ")[1][0];
    return "<img src='images/profiles/" + url.toLowerCase() + ".jpg' onerror='src=\"images/profiles/user.gif\"'>";
  }

  $("#makeGroups").click(function() {
    $("#main").fadeOut(function(){
      showNextGroup();
    });
  });


});