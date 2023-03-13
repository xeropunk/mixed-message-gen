function generate(){
    let quotes = {
        "- James Thurber":'"I loathe the expression "What makes him tick." It is the American mind, looking for simple and singular solution, that uses the foolish expression. A person not only ticks, he also chimes and strikes the hour, falls and breaks and has to be put together again, and sometimes stops like an electric clock in a thunderstorm."',
        "- Robertson Davies":'"Happiness is always a by-product. It is probably a matter of temperament, and for anything I know it may be glandular. But it is not something that can be demanded from life, and if you are not happy you had better stop worrying about it and see what treasures you can pluck from your own brand of unhappiness."',
        "- Albert Einstein":'"The important thing is not to stop questioning."',
        "- George Washington":'"Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. True friendship is a plant of slow growth, and must undergo and withstand the shocks of adversity before it is entitled to the appellation."',
        "- CS Lewis":'""There are far, far better things ahead than any we leave behind.”"',
        "- CS Lewis":'""I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.”"',
        "- Charles Spurgeon":'"Nobody ever outgrows Scripture; the book widens and deepens with our years."',
        "- Billy Graham":'"We are the Bibles the world is reading; we are the creeds the world is needing; we are the sermons the world is heeding."',
        "- Martin Luther":'"The Bible is the cradle wherein Christ is laid."',
        "- A.W Tozer": '"he Word of God well understood and religiously obeyed is the shortest route to spiritual perfection. And we must not select a few favorite passages to the exclusion of others. Nothing less than a whole Bible can make a whole Christian."',
        "- Abraham Lincoln":'"I am profitably engaged in reading the Bible. Take all of this Book that you can by reason and the balance by faith, and you will live and die a better man. It is the best Book which God has given to man."',
        "- John Wesley":'"I want to know one thing, the way to heaven: how to land safe on that happy shore. God himself has condescended to teach the way; for this very end he came from heaven. He has written it down in a book! Oh, give me that book! At any price, give me the book of God! I have it: here is knowledge enough for me. Let me be: “A man of one book."',
        "- Galileo Galilei":'"The Bible shows the way to go to heaven, not the way the heavens go."',
        "- Dwight L. Moody":'"The object of the Bible is not to tell how good men are, but how bad men can become good."',
        "- George Muller":'"God is the author of the Bible, and only the truth it contains will lead people to true happiness."',
        "- Dwight L. Moody":'"The Bible will keep you from sin, or sin will keep you from the Bible."',
        "- George Muller":'"I never saw a useful Christian who was not a student of the Bible."',
        "- ":'" Unless I am convicted by Scripture and plain reason. I do not accept the authority of popes and councils, for they have contradicted each other - my conscience is captive to the Word of God. I cannot and will not recant anything, for to go against conscience is neither right nor safe. Here I stand, I cannot do otherwise. God help me. Amen."',
        "- Martin Luther":'""',
        "- Augustine":'"The Holy Scriptures are our letters from home."',
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}