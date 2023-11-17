import * as R from 'ramda'
import { assert, header } from './utils/log'
type Game = {
  name: string,
  genres: string[],
  publisher: Publisher,
}
type Publisher = {
  name: string,
  location: string
}
const game: Game = {
  name: 'Keep talking and nobody explodes',
  genres: ['Puzzle', 'VR'],
  publisher: {
    name: 'Steel Crate Game',
    location: 'Ottawa, Canada'
  }
}
const name = R.lensProp<Game>("name")
assert(typeof (R.view(name, game)) === 'string', `${R.view(name, game) as string} is string`)

const first = R.lensIndex(0)
assert(typeof (R.view(first, game.genres)) == "string", `${R.view(first, game.genres) as string} is string`)

const publisherName = R.lensPath<Game>(['publisher', 'name'])
assert(typeof (R.view(publisherName, game)) === "string", `${R.view(publisherName, game) as string} is string`)

// const name2 = R.lens(R.prop('name'), R.assoc('name'))
// const alsoName = R.lensProp<Game>('name')

//setting properties

const game2 = {
  name: 'Overcooked',
  platforms: ['PS4', 'XB1', 'NS', 'PC'],
  publicsher: {
    name: 'Team 17',
    location: 'Wakefield, England'
  }
}
const firstPlatform = R.lensPath(['platforms', 0])
const newGame: Game = R.set(firstPlatform, 'PS5', game2)
assert(typeof (newGame) === 'object', `${newGame.name} is string`)
