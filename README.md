To run the demo, use `yarn start` command
Two components have been created, one is a normal functional component (Greeting). The other is a memoized component for this component (Memo).

The App component is re-rendering every 1 second and thus the Greeting component gets re-rendered every second as well. The React.memo() component does not and this can be seen from the console logs.
You can see the props being logged for the memo component only on initial render, whereas the other component logs every one second.

To read more about React.memo(), read the post here: https://www.wisdomgeek.com/development/web-development/react/using-react-memo-in-react-16-6/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
