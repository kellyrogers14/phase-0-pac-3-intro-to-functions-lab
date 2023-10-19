function shout(string) {
    return string.toUpperCase();
    // todo
  };

  function whisper(string) {
    return string.toLowerCase();
    // todo
  };

  function logShout(string) {
    return console.log(string.toUpperCase()) ;
  }
  ;
  function logWhisper(string) {
    return console.log(string.toLowerCase()) ;
  }
  ;

  function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
    return "I can't hear you!" 
};
    if (string === string.toUpperCase()){
        return "YES INDEED!"
    };
     if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
  }
