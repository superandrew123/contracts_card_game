// game mechanics for Contracts
$(document).ready(function(){
    var move = 0;
    var cards = 7;
    var lessCards = true;
    var gameData = [
        "hearts",
        "spades",
        "clubs",
        "diamonds",
        "None",
        "hearts",
        "spades",
        "clubs",
        "diamonds",
        "None",
        "hearts",
        "spades",
        "clubs",
    ];
    var advanceMove = function(){
        if(move >= 13){
            $('.suit').html("Total");
            $('.number-of-cards').html("Scores");
            $('.next').html("");  
            $(".suit").css("color", "black");
            return;
        }
        var plural = cards == 1 ? " card" : " cards";
        var suit = gameData[move];
        var html = 'None';
        var color = 'black';
        var nextText = '';
        switch(suit) {
            case "hearts":
                html = "<span> &hearts; </span>";
                color = "red";
                break;
            case "spades":
                html = "<span> &spades; </span>";
                break;
            case "clubs":
                html = "<span> &clubs; </span>";
                color = "blue";
                break;
            case "diamonds":
                html = "<span> &diams; </span>";
                color = "green";
                break;
        }
        $(".suit").html(html);
        $(".suit").css("color", color);
        $(".number-of-cards").html(cards + plural);
        if(lessCards){
            nextText = 'Next: ' + gameData[move + 1].charAt(0).toUpperCase() + gameData[move + 1].slice(1); + " " + (cards - 1);
            $('.next').html(nextText);
            cards--;
        } else {
            nextText = 'Next: ' + gameData[move + 1].charAt(0).toUpperCase() + gameData[move + 1].slice(1); + " " + (cards + 1)
            if(move == 12){
                $('.next').html("Last Round");    
            } else {
                $('.next').html(nextText);
            }
            cards++;
        }
        if(cards == 1){
            lessCards = false;
        }
        move ++;
    }
    advanceMove();
    $("html").click(advanceMove);
});