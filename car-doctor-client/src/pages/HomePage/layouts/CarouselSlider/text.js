

    let nextIndex = 0;
    for (let i = 0; i < 6; i++) {
        // if (nextIndex === images.length - 1) {
        //     nextIndex = 0; // Loop back to the first image
        //     break;
        // } else {
        //     nextIndex++;
        //     break;
        // }

        const element = nextIndex + i;
        if(element === 5){
            console.log("You have to back")
            nextIndex = 0;
            console.log(nextIndex)
        } else {
            nextIndex++;
            console.log(nextIndex)
        }
        
    }