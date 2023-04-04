// function runFiveMiles(){
//     console.log("Go for a five-mile run")
// }

// function liftWeights() {
//     console.log("Pump iron");
// }
  
// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles()
//     postRunActivity()
// }

// function morningRoutine(exercise){
//     let breakfast;

//     if (exercise === liftWeights){
//         breakfast = "protein bar"
//     } else if (exercise === swimFortyLaps){
//         breakfast = "smoothie"
//     } else {
//         breakfast = "granola"
//     }

//     exerciseRoutine(exercise)

//     return function(){
//         console.log("nom nom this" + breakfast + " mütiş ")
//     }

// }

// const afterExercise = morningRoutine(liftWeights)

// afterExercise()




function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function name(){
        return "yes"
    }
}

function returnsAnAnonymousFunction(){
    return (() => console.log("anonymous"))
}
