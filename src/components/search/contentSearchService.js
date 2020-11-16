
export const getnewData = (data) => {
    let arr = []
    data.map(planet => {
        let num = parseInt(planet.population);
        arr.push(num)
    })
    let arr1 = [];
    if (arr.length > 0) {
        var sorted = arr.slice().sort(function (a, b) { return b - a })
        arr.map(function (v, i) {
            let rank = sorted.indexOf(v) + 1;
            let fontsize = 31 - rank;
            fontsize = fontsize < 14 ? 14 : fontsize;
            fontsize = data[i].population === 'unknown' ? 12 : fontsize;
            arr1.push({
                name: data[i].name,
                population: data[i].population,
                fontSize: fontsize,
            })
        });
        return arr1
    }

}