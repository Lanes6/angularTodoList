$(document).ready(function() {
  

  var db = createDB();
  dropTable(db);
  createTable(db);
  initTable(db);
  getPersons(db);
  setupAdd(db);

  $('#historique').click(function () {
    msgClear()
    getPersons(db);
  });

  $('#taches').click(function () {
    msgClear()
    getPersons(db);
  });

  $('#add').click(function () {
    setupAdd(db);
  });

  function setupAdd(){
    msgClear()
    $('#saveButton').unbind();
    $('#saveButton').click(function () {
      if($('#Name').val()=="" || $('#Description').val()=="" || $('#Date').val()==""){
        message("red","Un des champs est vide");
        return null
      }
      const name= $('#Name').val();
      const descri= $('#Description').val();
      const date= $('#Date').val();
      $('#Name').val("");
      $('#Description').val("");
      saveTache(db,name,descri,date,true);
    });
  }

  function message(color,msg) {
    $('#error').html(msg);
    $('#error').css("color",color);
  }

  function msgClear(){
    $('#error').html("");
  }

  function createDB() {
    return openDatabase( "taches", "1.0","Base de gestion de taches",4 * 1024 * 1024);
  }

  function createTable(db) {
    db.transaction(function (tx) {    
      tx.executeSql("CREATE TABLE IF NOT EXISTS Tache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,name VARCHAR(100),descri VARCHAR(100),date DATE,display BOOLEAN)");      
    });
  }

  function dropTable(db){
    db.transaction(function (tx) {
      tx.executeSql("DROP TABLE IF EXISTS Tache");
    });
  }

  function initTable(db) {
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO Tache(name,descri,date,display) VALUES (?,?,?,?)",["Tache 1",
        "La tache une est une tache fort interessante","2019-08-04",true],function () {
      },function () {
        message("red","Erreur lors de l'insertion");
      });
    });
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO Tache(name,descri,date,display) VALUES (?,?,?,?)",["Tache 2",
        "La tache 2 est tout assi interessante","2020-08-04",true],function () {
      },function () {
        message("red","Erreur lors de l'insertion");
      });
    });
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO Tache(name,descri,date,display) VALUES (?,?,?,?)",["Tache 3",
        "La tache 3 etait plutot facile","2019-10-04",false],function () {
      },function () {
         message("red","Erreur lors de l'insertion");
      });
    });
  }

  function saveTache(db,name,descri,date,display){
    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO Tache(name,descri,date,display) VALUES (?,?,?,?)",[name,descri,date,display],function () {
        message("green","Tache ajoutée!");
      },function () {
        message("red","Erreur lors de l'insertion");
      });
    });
  }

  function getPersons(db) {
    db.transaction(function (tx) {
      tx.executeSql("SELECT * From Tache",[],function (tx, results) {
        histo = '<ul class="list-group">';
        liste = '<ul class="list-group">';
        var len = results.rows.length;
        for (i = 0; i < len; i++){
          temp ='<li class="list-group-item">';
          temp += "<p>"+results.rows.item(i).name+"</p>";
          temp += "<p>"+results.rows.item(i).descri+"</p>";
          temp += "<p> Echéance: "+results.rows.item(i).date+"</p>";
          if(results.rows.item(i).display=="true"){
            temp += 'Accomplie: <input class="checkbox" data-check="true" data-id="'+results.rows.item(i).id+'" type="checkbox">';
          }else{
            temp += 'Accomplie: <input class="checkbox" data-check="false" data-id="'+results.rows.item(i).id+'" type="checkbox" checked>';
          }
          temp +="</li><br>";
          histo+=temp;
          if(results.rows.item(i).display=="true"){
            liste+=temp;
          }
        }
        histo += "</ul>";
        liste += "</ul>";
        $('#histoContent').html(histo);
        $('#listContent').html(liste);
        $('.checkbox').click(function () {
          updatePerson(db,$(this).attr('data-id'),($(this).attr('data-check')=="true"));
          if($(this).parent().parent().parent().attr('id')=="listContent"){
            $(this).parent().remove();
          }
        });
      });
    },null);
  }

  function updatePerson(db,id,display){
    if(display){
      display=false;
    }else{
      display=true
    }
    db.transaction(function (tx) {
      tx.executeSql("UPDATE Tache SET display =? WHERE id=?",[display,id]);
    });
  }

});
