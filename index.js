
function showAnswer(close,open,close2)
{   
    document.getElementById(open).classList.remove('active');
    document.getElementById(close).classList.add('hidden');
    document.getElementById(close2).classList.remove('hidden');
}
function closeAnswer(close,open,close2)
{
    document.getElementById(open).classList.add('active');
    document.getElementById(close).classList.remove('hidden');
    document.getElementById(close2).classList.add('hidden');
}