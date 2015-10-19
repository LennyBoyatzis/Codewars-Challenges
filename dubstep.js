function songDecoder(song) {
    var decodedSong = song.replace(/WUB/g, ' ').trim();
    return decodedSong;
}

songDecoder('AWUBWUBWUBBWUBWUBWUBC');
songDecoder('AWUBBWUBC');
songDecoder('WUBAWUBBWUBCWUB');
