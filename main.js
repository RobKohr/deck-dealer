$(document).ready(function(){
    var ranks = ['A', 'K', 'Q','J', '10'].concat('98765432'.split(''));
    var suits = ['&spades;', '&hearts;','&diams;','&clubs;'];
    var cards = [];
    var current_card = 0;
    ranks.forEach(function(rank){
        suits.forEach(function(suit) {
            var color = 'black';
            if(suit==='&hearts;' || suit==='&diams;'){
                color = 'red';
            }
            cards.push('<span style="color:'+color+';">'+rank + suit+'</span>');
        });
    });

    function shuffle() {
        let counter = cards.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = cards[counter];
            cards[counter] = cards[index];
            cards[index] = temp;
        }
    }

    function reset(){
        shuffle();
        current_card = 0;
        $('#deck').show('fast');
        $('#delt').empty();
    }
    reset();
    $('#shuffle').click(reset);

    $('#deck').click(function deal(){
        var card = '<div class="card">' + cards[current_card] +'</div>';
        $('#delt').append(card);
        current_card++;
        $('#left').text(52-current_card);
        if(current_card===52){
            $('#deck').hide('fast');
        }
    });
});