$(document).ready(function() {

    // Variables
    var attackPower = 0;
    var counterPower = 0;
    var health = 0;
    var userSelected = false;
    var enemySelected = false;
    var canUseAgain = true;

    // Objects
    var pRick = {
        health: 150,
        attackPower: 8,
        counterPower: 25    
    };
    var meeseeks = {
        health: 80,
        attackPower: 10,
        counterPower: 25    
    };
    var squanchy = {
        health: 100,
        attackPower: 15,
        counterPower: 25    
    };
    var jerry = {
        health: 50,
        attackPower: 20,
        counterPower: 25    
    };
    console.log(jerry.health);
    console.log(meeseeks.counterPower);
    // Functions

    // Click Events
    $(".firstChar").on("click", function() {
        if(userSelected == false && enemySelected == false) {
        var newUser = $("<div>");
        newUser.addClass("firstChar card-body");
        $(".userCharLoc").html(newUser);
        userSelected = true;
        canUseAgain = false;
        } else if ((userSelected == true) && (enemySelected == false) && (canUseAgain == true)) {
            var newEnemy = $("<div>");
            newEnemy.addClass("firstChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            enemySelected = true;
            canUseAgain = false;
        }
    });
    $(".secondChar").on("click", function() {
        if(userSelected == false && enemySelected == false) {
        var newUser = $("<div>");
        newUser.addClass("secondChar card-body");
        $(".userCharLoc").html(newUser);
        userSelected = true;
        canUseAgain = false;
        } else if ((userSelected == true) && (enemySelected == false) && (canUseAgain == true)) {
            var newEnemy = $("<div>");
            newEnemy.addClass("secondChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            enemySelected = true;
            canUseAgain = false;
        }
    });
    $(".thirdChar").on("click", function() {
        if(userSelected == false && enemySelected == false) {
        var newUser = $("<div>");
        newUser.addClass("thirdChar card-body");
        $(".userCharLoc").html(newUser);
        userSelected = true;
        canUseAgain = false;
        } else if ((userSelected == true) && (enemySelected == false) && (canUseAgain == true)) {
            var newEnemy = $("<div>");
            newEnemy.addClass("thirdChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            enemySelected = true;
            canUseAgain = false;
        }
    });
    $(".fourthChar").on("click", function() {
        if(userSelected == false && enemySelected == false) {
        var newUser = $("<div>");
        newUser.addClass("fourthChar card-body");
        $(".userCharLoc").html(newUser);
        userSelected = true;
        canUseAgain = false;
        } else if ((userSelected == true) && (enemySelected == false) && (canUseAgain == true)) {
            var newEnemy = $("<div>");
            newEnemy.addClass("fourthChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            enemySelected = true;
            canUseAgain = false;
        }
    });
});
