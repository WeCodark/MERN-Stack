// Break Statement -> Stop loop instantly
for (let counter = 1; counter <= 5; counter++) {
    console.log(counter)
    if (counter === 3) break
}


// Continue Statement -> Skip this turn, go to next
for (let counter = 1; counter <= 5; counter++) {
    if (counter === 3) continue
    console.log(counter)
}
