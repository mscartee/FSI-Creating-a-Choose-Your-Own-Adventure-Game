// Your Code Here
let firstAnswer = window.prompt('Do you head left or right?')
console.log(firstAnswer==='left')
if(firstAnswer === 'left'){    
    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it, or continue on your path?')
    if(secondAnswer === 'Follow'){
        let thirdAnswer = window.prompt('You Follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical sfe haven.')
        if(thirdAnswer === 'Stay') {
            window.alert ('You live happily amongst the cats for the rest of your days.')
        }else if(thidAnswer === 'Follow') {
            window.alert ('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

        }
    }
} else if(firstAnswer === "right") {
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')

}