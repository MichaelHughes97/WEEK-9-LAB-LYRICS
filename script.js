var lyrics = " ";

for (var  i=99; i>=2; i=i-1) {
  lyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.\n";
  lyrics += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n\n";
}

lyrics += "1 bottle of beer on the wall, 1 bottle of beer.\n";
lyrics += "Take one down and pass it around, no more bottles of beer on the wall.\n\n";
lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n";
lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

// Display the lyrics in the div

document.getElementById("lyrics").innerText = lyrics;