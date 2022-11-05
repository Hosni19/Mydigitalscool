if (Cookies.get('score') > 0)
{
    document.getElementsByClassName('score')[0].innerHTML = Cookies.get('score')
}
else 
{
    Cookies.set('score', 0)
}


function game() 
{
    var totalScore = Cookies.get('score')
    totalScore++
    document.getElementsByClassName('score')[0].innerHTML = totalScore
    Cookies.set('score', totalScore)
}


function resetScore()
{
    Cookies.set('score', 0)
    document.getElementsByClassName('score')[0].innerHTML = Cookies.get('score')
}

