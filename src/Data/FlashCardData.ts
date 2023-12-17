import { FlashCard } from '../Model/FlashCard'

export const getAllFlashCards = ( language: string ) : FlashCard[] => {
  if ( language === "SR" ) {
    return getAllSerbianFlashCards();
  } else if ( language === "DE" ) {
    return getAllGermanFlashCards();
  }

  return [];
}

const getAllSerbianFlashCards = () : FlashCard[] => {
    return [ 
        {translation: "hvala", english: "thank you"},
        {translation: "mačka", english: "cat"},
        {translation: "promislio", english: "thought"},
        {translation: "smijeh", english: "laugh"},
        {translation: "idite", english: "go"},
        {translation: "kakve", english: "what kind"},
        {translation: "probudilo", english: "wake up"},
        {translation: "svinja", english: "pig"},
        {translation: "lisica", english: "fox"},
        {translation: "sestra", english: "sister"},
        {translation: "brat", english: "brother"},
        {translation: "mesec", english: "moon"},
        {translation: "stvori", english: "created"},
        {translation: "dorucak", english: "breakfast"},
        {translation: "jedan", english: "one"},
        {translation: "dva", english: "two"},
        {translation: "tri", english: "three"},
        {translation: "četiri", english: "four"},
        {translation: "stvarno", english: "really"},
        {translation: "zašto", english: "why"},
        {translation: "nebo", english: "sky"},
        {translation: "ljut", english: "angry"},
        {translation: "oko", english: "eye"},
        {translation: "život", english: "life"},
        {translation: "naručiti", english: "place an order"},
        {translation: "mogao", english: "could"},
        {translation: "mesto", english: "place"},
        {translation: "možete", english: "you can"},
        {translation: "polako", english: "slow down"},
        {translation: "razumeti", english: "understand"},
        {translation: "ručak", english: "lunch"},
        {translation: "noč", english: "night"},
        {translation: "sendvič", english: "sandwich"},
        {translation: "led", english: "ice"},
        {translation: "kuča", english: "home"},
        {translation: "levo", english: "left"},
        {translation: "zemlja", english: "earth"},
        {translation: "desno", english: "right"},
        {translation: "lopta", english: "ball"},
        {translation: "početku", english: "beginning"},
        {translation: "čarapa", english: "sock"},
        {translation: "piće", english: "drink"},
        {translation: "teško", english: "hard"},
        {translation: "kukuruz", english: "corn"},
        {translation: "hrane", english: "food"},
        {translation: "milost", english: "grace"},
        {translation: "slatko", english: "sweet"},
        {translation: "kiselo", english: "sour"},
        {translation: "prst", english: "finger"},
        {translation: "glas", english: "voice"},
        {translation: "ruku", english: "hand"},
        {translation: "carpet", english: "tepih"},
        {translation: "kiša", english: "rain"},
        {translation: "oblak", english: "cloud"},
        {translation: "poljubac", english: "kiss"},
        {translation: "kosa", english: "hair"}
      ];
}

const getAllGermanFlashCards = () : FlashCard[] => {
    return [ 
      {translation: "sehr", english: "very"},
      {translation: "unsere", english: "our"},
      {translation: "nachbar", english: "neighbour"},
      {translation: "nett", english: "nice"},
      {translation: "aber", english: "but"},
      {translation: "wohnt", english: "lives"},
      {translation: "studiert", english: "studying"},
      {translation: "tanzen", english: "dance"},
      {translation: "kuss", english: "kiss"},
      {translation: "krank", english: "sick"},
      {translation: "geschichte", english: "story"},
      {translation: "laut", english: "loud"},
      {translation: "leute", english: "people"},
      {translation: "year", english: "jahr"},
      {translation: "tür", english: "door"},
      {translation: "ruhig", english: "quiet"},
      {translation: "mutter", english: "mother"},
      {translation: "achtzehn", english: "eighteen"},
      {translation: "schmecken", english: "taste"},
      {translation: "kalt", english: "cold"},
      {translation: "schlüssel", english: "key"},
      {translation: "flughafen", english: "airport"},
      {translation: "noch", english: "still"},
      {translation: "danke", english: "thank you"},
      {translation: "katze", english: "cat"},
      {translation: "gedanke", english: "thought"},
      {translation: "lachen", english: "laugh"},
      {translation: "gehen", english: "go"},
      {translation: "aufwachen", english: "wake up"},
      {translation: "schwein", english: "pig"},
      {translation: "fuchs", english: "fox"},
      {translation: "schewster", english: "sister"},
      {translation: "bruder", english: "brother"},
      {translation: "mond", english: "moon"},
      {translation: "erstellt", english: "created"},
      {translation: "frühstück", english: "breakfast"},
      {translation: "eins", english: "one"},
      {translation: "zwei", english: "two"},
      {translation: "drei", english: "three"},
      {translation: "vier", english: "four"},
      {translation: "wirklich", english: "really"},
      {translation: "warum", english: "why"},
      {translation: "himmel", english: "sky"},
      {translation: "wütend", english: "angry"},
      {translation: "auge", english: "eye"},
      {translation: "leben", english: "life"},
      {translation: "könnte", english: "could"},
      {translation: "ort", english: "place"},
      {translation: "verlangsamen", english: "slow down"},
      {translation: "verstehen", english: "understand"},
      {translation: "mittagessen", english: "lunch"},
      {translation: "nacht", english: "night"},
      {translation: "eis", english: "ice"},
      {translation: "heim", english: "home"},
      {translation: "links", english: "left"},
      {translation: "erde", english: "earth"},
      {translation: "rechts", english: "right"},
      {translation: "anfang", english: "beginning"},
      {translation: "socke", english: "sock"},
      {translation: "trinken", english: "drink"},
      {translation: "hart", english: "hard"},
      {translation: "mais", english: "corn"},
      {translation: "essen", english: "food"},
      {translation: "anmut", english: "grace"},
      {translation: "süss", english: "sweet"},
      {translation: "sauer", english: "sour"},
      {translation: "zähne", english: "teeth"},
      {translation: "vogel", english: "bird"},
      {translation: "teppich", english: "carpe"},
      {translation: "stimme", english: "voice"},
      {translation: "haar", english: "hair"}
    ];
}