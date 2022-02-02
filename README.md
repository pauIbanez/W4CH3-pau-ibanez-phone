# Components

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

## Reponsabilities

### Info

- Recieves a boolean
- Recieves a string (class on deactivated)

- Add recived class to the JSX when the recieved booleaan is false

### Display

- Recieves a number

- Display the recieved number

### Actions

- Recieves a boolean and an o

- Render Action set up with hang or call based on boolean

### Action

- Recieves an actionOnClick
- Recieves a class
- Recieves a text

- Render according to the class and text recieved, add onClick with the passed action
- Prevent default a behaviour

### Keyboard

- Render keys with correct text

### Key

- Recives an actionOnClick
- Recieves a text

- Render witrh recieved text and add onClick with recieved action
