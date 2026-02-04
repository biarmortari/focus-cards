# FocusCards

FocusCards is a frontend web application designed to support focused studying through flashcards and time management.

The app combines active recall (flashcards) with Pomodoro sessions, allowing users to study more efficiently without switching between tools.

## Features

**Advice Slip API**

- Daily study advice displayed before starting a study session

**Flashcards**

- Create flashcards with question, answer, and category
- Edit and delete existing flashcards
- View flashcards in a grid layout
- Filter flashcards by category
- Shuffle flashcards for randomized study sessions
- Option to hide mastered cards
- See flashcard details including question, answer, category, and mastery progress
- See form validation messages when trying to submit a card without all fields completed

**Study Mode**

- Study flashcards one at a time
- Flip cards to reveal the answer
- Navigate between cards (Previous / Next)
- Track progress by marking cards as known
- See which card they're currently viewing (e.g., "Card 1 of 40")
- Track mastery progress for each card on a scale of 0 to 5
- Reset progress on a flashcard to start learning it again

**Focus & Time Management**

- Pomodoro timer
- Start, pause, and reset study sessions
- Timer available during study mode (side widget)

**UI & Accessibility**

- Responsive layout for desktop and mobile
- Visual feedback for interactions (hover, focus, active states)
- Load more flashcards when viewing the full card list with more than 6 cards

## Built With

- React
- JavaScript (ES6+)
- CSS / Flexbox / Grid

## Project Status

This project was developed as a final frontend project for a web development bootcamp and is intended for educational and portfolio purposes only.

It is not a commercial product.

## Future Improvements

- 100% keyboard navigation
- **Backend**: data persistence, flashcard storage, and user authentication (registration and login)

## 🎨 Design Inspiration

The UI and overall design of this project were inspired by the  
[Frontend Mentor Flashcard App Challenge](https://www.frontendmentor.io/challenges/flashcard-app)
