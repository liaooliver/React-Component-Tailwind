- Context API
    - React.createContext
        - creates a Context Object.
        - when React renders a component, that subscribes to this Context Object.

    - Context.Provider
        - Context Object comes a Provider React component.
        - Accepts a value props to be passed to consuming component.
        - every context object is from Provider component.

    - Class.contextType
        - be used within class component only.

        - can use a static field to initialize contextType.

    - Context.Consumer
        - let React component subscribes to context changes.

        - can subscribes context within a function component.

    - Context.displayName
        - Context object accepts a displayName string property.

        - React DevTools uses this string to determine what to display for the context.
    
- HOOK API
    - useContext
        - accepts a context object.

        - context data is determined by nearest Context.Provider.

        - when nearest Context.Provider Component updates, useContext will trigger a rerender.

    - useReducer
        - useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values

        - useReducer function
            - first params: accepts a reducer of type (state, action) => newState

            - second params: accepts a init state of type array

            - third params
                - It’s an optional value.
                - a function. 
                - can calculate the initial state/value and return.