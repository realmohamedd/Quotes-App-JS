function NewQuote(){
    var arryQuotsAuthor = ['― Frank Zappa' , '― Marcus Tullius Cicero' , 'Frank Sinatra', '― Oscar Wilde' , '― Mark Twain' , 'Elbert Hubbard'];
    var arrayQuots = [
        '“So many books, so little time.”',
        '“A room without books is like a body without a soul.”',
        'The best revenge is massive success.',
        '“Be yourself; everyone else is already taken.”',
        '“If you tell the truth, you dont have to remember anything.”',
        'Do not take life too seriously. You will not get out alive.'
    ];
    
    var quote = Math.floor(Math.random() * arryQuotsAuthor.length);
    document.getElementById("quote").innerHTML= arrayQuots[quote];
    document.getElementById("author").innerHTML=arryQuotsAuthor[quote];

    
    // alert(arryQuotsAuthor[quote]);
    // alert(arrayQuots[quote]);
}
