var sumWheels = 40,
combinations = 0,
cars, trucks, 
trikes;

for (cars = 0; cars <= sumWheels; cars++){
	for(trucks = 0; trucks <= sumWheels; trucks++){
		for(trikes = 0; trikes <= sumWheels; trikes++){
			if ((cars*4 + trucks*10 + trikes*3) === sumWheels ) {
				combinations++;
			}
		}
	}
}

console.log(combinations);
