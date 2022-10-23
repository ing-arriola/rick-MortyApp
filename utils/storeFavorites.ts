export const toogleFavorites = (id:number) => {
    if(typeof window === 'undefined') return false
    let favorites: number [] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)){
        favorites = favorites.filter( characterId => characterId !== id)
    }else{
        favorites = [...favorites,id]
    }

    localStorage.setItem('favorites',JSON.stringify(favorites))

}

export const existInFavorites = (id :number) : boolean => {
    if(typeof window === 'undefined') return false
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
}

export const favoriteCharacters= () : number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}