function clicked()
{
    sessionStorage.setItem('currentMatchName', genName());
    window.location.href = 'play.html';
}

function genName()
{
    i = 1;
    while(true)
    {
        if(!(`Match ${i}` in sessionStorage))
        {
            break;
        }
        i++;
    }

    return `Match ${i}`;
}