function findHowManyLanguagesInCountries(){

    const countryKeys = Object.keys(countries);
    const languages = [];
    
    countryKeys.forEach(country => {
        languages.push(...[...countries[country].languages])
    })


    const languagesInSet = new Set();

    languages.forEach(language => languagesInSet.add(language))


    return `There are ${languagesInSet.size} languages`
}

findHowManyLanguagesInCountries()     // There are 112 languages


function findMostSpokenLanguage(count){
    const languagesCount = {};

    countries.forEach(country => {
        country.languages.forEach(language => {
            if(languagesCount[language]){
                languagesCount[language]++;
            }
            else {
                languagesCount[language]=1;
            }
        })
    })


    const mostSpokenLanguages = Object.keys(languagesCount).sort((a, b) => {
        
        if(languagesCount[a] > languagesCount[b]) return -1;
        if(languagesCount[a] < languagesCount[b]) return 1;

        return 0;   // First sorts the array based on counts (Most spoken languages)
    }).map(language => {
        return { [language] : languagesCount[language] }    // then returned as { countryName: languagesCount }
    })  


    return mostSpokenLanguages.slice(0, count);     
}

findMostSpokenLanguage(5)       /*  { English: 91 },
                                    { French: 45 },
                                    { Arabic: 25 },
                                    { Spanish: 24 },
                                    { Russian: 9 },
                                    { Portuguese: 9 }
                                */
