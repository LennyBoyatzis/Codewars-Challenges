function checkerboard (size) {
	if( size <= 0 ) {
		return "";
	}
	var board = "";
	for( var x = 0; x < size; x++ ) {
		for( var y = 0; y < size; y++ ) {
			board += ( (x + y) % 2 == 0 ? "[r]" : "[b]");
		}
		board += "\n";
	}
	return board;
};
