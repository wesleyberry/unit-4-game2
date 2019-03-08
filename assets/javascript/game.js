$(document).ready(function() {

    // Variables
    var attackPower = 0;
    var counterPower = 0;
    var health = 0;
    var charsOnField = 0;
    var canUsePic = true;
    var canUseMee = true;
    var canUseSqu = true;
    var canUseJer = true;

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

    // Functions
    function attack() {

    }
    // Click Events
    $("#.customButton").on("click", function() {
        attack();
    });

    $(".firstChar").on("click", function() {
        if(charsOnField == 0 && canUsePic == true) {
        var newUser = $("<div>");
        newUser.addClass("firstChar card-body");
        $(".userCharLoc").html(newUser);
        charsOnField++;
        } 
        else if (charsOnField == 1 && canUsePic == true) {
            var newEnemy = $("<div>");
            newEnemy.addClass("firstChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            charsOnField++;
        }
        canUsePic = false;
        console.log(charsOnField);
    });

    $(".secondChar").on("click", function() {
        if(charsOnField == 0 && canUseMee == true) {
        var newUser = $("<div>");
        newUser.addClass("secondChar card-body");
        $(".userCharLoc").html(newUser);
        charsOnField++;
        } else if (charsOnField == 1 && canUseMee == true) {
            var newEnemy = $("<div>");
            newEnemy.addClass("secondChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            charsOnField++;
        }
        canUseMee = false
        console.log(charsOnField);
    });

    $(".thirdChar").on("click", function() {
        if(charsOnField == 0 && canUseSqu == true) {
        var newUser = $("<div>");
        newUser.addClass("thirdChar card-body");
        $(".userCharLoc").html(newUser);
        charsOnField++;
        } else if (charsOnField == 1 && canUseSqu == true) {
            var newEnemy = $("<div>");
            newEnemy.addClass("thirdChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            charsOnField++;
        }
        canUseSqu = false;
        console.log(charsOnField);
    });

    $(".fourthChar").on("click", function() {
        if(charsOnField == 0 && canUseJer == true) {
        var newUser = $("<div>");
        newUser.addClass("fourthChar card-body");
        $(".userCharLoc").html(newUser);
        charsOnField++;
        } else if (charsOnField == 1 && canUseJer == true) {
            var newEnemy = $("<div>");
            newEnemy.addClass("fourthChar card-body");
            $(".enemyCharLoc").html(newEnemy);
            charsOnField++;
        }
        canUseJer = false;
        console.log(charsOnField);
    });

});
