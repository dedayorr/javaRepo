function guessGame(guess){
    const value = Math.floor((Math.random()*10+1));
    
    if(guess == value){
        return "congratulations you guessed right!"
    } else if(guess > value){
        return "oops! try a lesser number"
    } else if(guess < value){
        return "opps! try a greater number"
    }
    
}
console.log(guessGame(2))

