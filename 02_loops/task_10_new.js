
/* task_10.
 Напишете JavaScript програма, която намира най-често 
 повтарящата се дума в текст и я отпечатва в конзолата, 
 както и колко пъти се повтаря във формата "дума-> брой".
 Ако няколко думи са с максимален брой повторения – отпечатайте 
 ги в азбучен ред. I 
*/

//var str='in the middle of the night';
//var str='Welcome to SoftUni. Welcome to Java. Welcome everyone.';
var str = 'Hello my friend, hello my darling. Come on, come here . Welcome, welcome darling.';
var arr = str.split(/[\W\d]+/);
var strarr=arr;
    var word = [];
    var count = 1;

    for(var i = 0; i < strarr.length; i++)
    {
        strarr[i] = strarr[i].toLowerCase();
        if(!word[strarr[i]])
        {
            word[strarr[i]] = 1;
        } else
        {
            word[strarr[i]] += 1;
        }
    }

    for(key in word)
    {
        var value = word[key];
        if(value >= count)
        {
            count = value;
        }
    }

    var sorted = Object.keys(word).sort();

    for(var keys in sorted)
    {
        if(word[sorted[keys]] === count)
        {
            console.log(sorted[keys] + ' -> ' + word[sorted[keys]] + ' times');
        }
    }