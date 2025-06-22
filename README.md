# 🎯 Typing Speed Test

[**Live Demo**](https://moaz615.github.io/typing-speed-test/)

A feature-rich, multi-language typing speed test application built with HTML, CSS, and vanilla JavaScript. This project provides a clean, responsive interface for users to test and improve their typing skills in various modes and languages.

## ✨ Features

- **Multi-Language Support**: Practice typing in English, Arabic, French, and Spanish. The UI is fully translated for each language.
- **Multiple Game Modes**:
    - **Full Passage**: Type through an entire text passage from start to finish.
    - **Timed Mode**: Type as much as you can within a set time (15s, 30s, 60s, 120s). New passages are loaded automatically if you finish one before the time is up.
    - **Word Count Mode**: Test your speed on a fixed number of words (10, 25, 50, 100). The test continues with new passages until the word count is met.
    - **Custom Text**: Paste your own text to practice with.
- **Real-time Feedback**:
    - **WPM (Words Per Minute)**: Calculated live and adjusted for errors.
    - **Accuracy**: Percentage of correctly typed characters.
    - **Errors**: Live count of incorrect characters.
- **Advanced Gameplay Options**:
    - **Punctuation Toggle**: Enable or disable punctuation in the passages. When disabled, punctuation can be typed or skipped without penalty.
    - **Sudden Death Mode**: End the game immediately after the first error for an extra challenge.
- **Efficient Passage Fetching**:
    - Passages are fetched from various public APIs to provide a wide variety of texts.
    - An intelligent prefetching system loads the next passage in the background for a seamless, instant transition between texts.
    - A rich library of local passages serves as a fallback if APIs are slow or unavailable, ensuring a smooth offline experience.
- **User Experience**:
    - **Responsive Design**: The layout adapts beautifully to both desktop and mobile devices.
    - **Shareable Results**: Easily copy or share your final WPM, accuracy, and error count.
    - **Clean UI**: A modern, visually appealing interface with a "Hide/Show Stats" option for a more focused view.

## 🚀 How to Use

1.  Clone or download the repository.
2.  Open the `index.html` file in your favorite web browser.
3.  Select your preferred language using the buttons at the top.
4.  Choose a game mode from the dropdown menu and adjust the settings (time, word count, etc.) if applicable.
5.  Click the **"Start Game"** button and begin typing!

## 📂 Project Structure

```
.
├── index.html              # The main HTML file for the application structure.
├── style.css               # All the styles for the application.
├── script.js               # Core game logic, state management, and DOM manipulation.
└── localization.js         # Contains all UI string translations for supported languages.
```

## 💻 Technologies Used

- **HTML5**
- **CSS3** (with Flexbox and Grid for layout)
- **Vanilla JavaScript** (ES6+) 