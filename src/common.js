import * as c from './constants'

const getGameFilterFunctionByKey = (key) => {
    var filterFunction;

    switch (key) {
        case c.PLATFORM_DESC:
            filterFunction = (a, b) => b.platform.localeCompare(a.platform)
            break;
        case c.PLATFORM_ASC:
            filterFunction = (a, b) => a.platform.localeCompare(b.platform)
            break;
        case c.SCORE_DESC:
            filterFunction = (a, b) => (parseFloat(b.score) - parseFloat(a.score))
            break;
        case c.SCORE_ASC:
        default:
            filterFunction = (a, b) => (parseFloat(a.score) - parseFloat(b.score))
            break;
    }
    return filterFunction
}

export const getFilteredGames = (games, searchTerm, sortKey) => {
    return games.filter(g => g.title.includes(searchTerm))
        .sort(getGameFilterFunctionByKey(sortKey))
}