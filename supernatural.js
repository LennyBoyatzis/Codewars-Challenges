const QUOTES = {
    "werewolf":           "Silver knife or bullet to the heart",
    "vampire":            "Behead it with a machete",
    "wendigo":            "Burn it to death",
    "shapeshifter":       "Silver knife or bullet to the heart",
    "angel":              "Use the angelic blade",
    "demon":              "Use Ruby's knife, or some Jesus-juice",
    "ghost":              "Salt and iron, and don't forget to burn the corpse",
    "dragon":             "You have to find the excalibur for that",
    "djinn":              "Stab it with silver knife dipped in a lamb's blood",
    "pagan god":          "It depends on which one it is",
    "leviathan":          "Use some Borax, then kill Dick",
    "ghoul":              "Behead it",
    "jefferson starship": "Behead it with a silver blade",
    "reaper":             "If it's nasty, you should gank who controls it",
    "rugaru":             "Burn it alive",
    "skinwalker":         "A silver bullet will do it",
    "phoenix":            "Use the colt",
    "witch":              "They are humans",
}

function bob(creature) {
    var message = QUOTES[creature] || "I have friggin no idea yet";
    console.log(`${message}, idjits!`);
}

bob("phoenix");
