	function generateRandomName(amountGenerated)
	{
		var firstWord = "";
		var secondWord = "";
		var firstNumber = 0;
		var secondNumber = 0;
		var pickWhichOne = 0;
		var pickWhichTwo = 0;
		var generatedTeamName = "";

		seedRandom();

		var names = [];

		console.log(amountGenerated)
		for (i = 0; i < amountGenerated; i++) 
		{
			generatedTeamName = "";

		// 2 - d10 dicerolls to choose which of the 10 list of arrays to choose from
		NextRandomNumber();
		firstNumber = randomInRange(12);
		NextRandomNumber();
		secondNumber = randomInRange(12);

		// which item in list use (First Dice Roll)
		if(firstNumber == 1) 
		{
			NextRandomNumber();
			pickWhichOne = randomInRange(fr1Max);
			firstWord = fr1[pickWhichOne];
		}
		else if(firstNumber == 2) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr2Max);
			firstWord = fr2[pickWhichOne];
		}
		else if(firstNumber == 3) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr3Max);
			firstWord = fr3[pickWhichOne];
		}
		else if(firstNumber == 4) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr4Max);
			firstWord = fr4[pickWhichOne];
		}
		else if(firstNumber == 5) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr5Max);
			firstWord = fr5[pickWhichOne];
		}
		else if(firstNumber == 6) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr6Max);
			firstWord = fr6[pickWhichOne];
		}
		else if(firstNumber == 7) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr7Max);
			firstWord = fr7[pickWhichOne];
		}
		else if(firstNumber == 8) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr8Max);
			firstWord = fr8[pickWhichOne];
		}
		else if(firstNumber == 9) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr9Max);
			firstWord = fr9[pickWhichOne];
		}
		else if(firstNumber == 10) 
		{ 
			NextRandomNumber();
			pickWhichOne = randomInRange(fr10Max);
			firstWord = fr10[pickWhichOne];
		}
		else
		{
			NextRandomNumber();
			pickWhichOne = randomInRange(fr6Max);
			firstWord = fr6[pickWhichOne];
		}

		// which item in list use (Second Dice Roll)
		if(secondNumber == 1) 
		{
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr1Max);
			secondWord = sr1[pickWhichTwo];
		}
		else if(secondNumber == 2) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr2Max);
			secondWord = sr2[pickWhichTwo];
		}
		else if(secondNumber == 3) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr3Max);
			secondWord = sr3[pickWhichTwo];
		}
		else if(secondNumber == 4) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr4Max);
			secondWord = sr4[pickWhichTwo];
		}
		else if(secondNumber == 5) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr5Max);
			secondWord = sr5[pickWhichTwo];
		}
		else if(secondNumber == 6) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr6Max);
			secondWord = sr6[pickWhichTwo];
		}
		else if(secondNumber == 7) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr7Max);
			secondWord = sr7[pickWhichTwo];
		}
		else if(secondNumber == 8) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr8Max);
			secondWord = sr8[pickWhichTwo];
		}
		else if(secondNumber == 9) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr9Max);
			secondWord = sr9[pickWhichTwo];
		}
		else if(secondNumber == 10) 
		{ 
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr10Max);
			secondWord = sr10[pickWhichTwo];
		}
		else
		{
			NextRandomNumber();
			pickWhichTwo = randomInRange(sr1Max);
			secondWord = sr1[pickWhichTwo];
		}

		NextRandomNumber()

		generatedTeamName = generatedTeamName + firstWord + " " + secondWord;
		names.push(generatedTeamName)
		}
		return names;
}