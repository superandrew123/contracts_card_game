// game mechanics for Contracts
$(document).ready(function(){
    var move = 0;
    var cards = 7;
    var lessCards = true;
    var gameData = [
        "Hearts",
        "Spades",
        "Clubs",
        "Diamonds",
        "None",
        "Hearts",
        "Spades",
        "Clubs",
        "Diamonds",
        "None",
        "Hearts",
        "Spades",
        "Clubs",
    ];
    var advanceMove = function(){
        if(move >= 13){
            $('.suit').html("Total");
            $('.number-of-cards').html("Scores");
            $('.next').html("");  
            return;
        }
        var plural = cards == 1 ? " card" : " cards";
        $(".suit").html(gameData[move]);
        $(".number-of-cards").html(cards + plural);
        if(lessCards){
            $('.next').html('Next: ' + gameData[move + 1] + " " + (cards - 1));
            cards--;
        } else {
            if(move == 12){
                $('.next').html("Last Round");    
            } else {
                $('.next').html('Next: ' + gameData[move + 1] + " " + (cards + 1));
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