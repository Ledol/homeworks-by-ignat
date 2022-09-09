import {checkAge18AC, homeWorkReducer, sortNameDownAC, sortNameUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";



let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const action = sortNameUpAC('up')
    const newState = homeWorkReducer(initialState, action)

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
    expect(newState.length).toBe(6)

    // expect(...).toBe(...)
})
test('sort name down', () => {
    const action = sortNameDownAC('down')
    const newState = homeWorkReducer(initialState, action)

    expect(newState[0].name).toBe('Кот')
    expect(newState[5].name).toBe('Александр')
    expect(newState.length).toBe(6)
})

test ('check age 18', () => {
    const action = checkAge18AC(18)
    const newState = homeWorkReducer(initialState, action)

    expect(newState.length).toBe(4)
})
