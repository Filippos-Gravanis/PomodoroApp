 export function calculateNewTime (previousTime){
    previousTime = previousTime.split(":")
    let minutes = previousTime[0]
    let seconds = previousTime[1]
    if (seconds[1]=="0")
    {
        if(seconds[0]=="0"){
            let noZeroFound = false
            let index = minutes.length -1
             
            while ( index > -1 && !noZeroFound){
                console.log(1)
                if (minutes[index]!="0"){
                    console.log(minutes[index])
                    noZeroFound = true
                    let extraNines = minutes.substr(index+1,minutes.length-1).length  
                    console.log(minutes.substr(index+1,minutes.length-1),"k")
                    minutes = minutes.substr(0,index)+(parseInt(minutes[index])-1)
                    console.log(extraNines * "9")
                    if (extraNines!=0){
                    minutes = minutes + (extraNines * "9")
                    }
                    seconds = "59"
                }
                index--
            }
        }
        else{
            seconds= parseInt(seconds[0]-1)+"9"
        }
    }
    else{
        seconds= seconds[0] + String(parseInt(seconds[1])-1)
    }
    return minutes+":"+seconds
}
console.log(calculateNewTime("010:00"))
// 25:00

export function isNonZeroFound (Time){
    const numbers = ["1","2","3","4","5","6","7","8","9"]
    let nonZeroFound = false
    numbers.forEach(number =>{
        console.log(number,Time)
        if (Time.includes(number)){
            console.log(number,Time)
            nonZeroFound = true
        }
    })
    return nonZeroFound
}

