# CareoAi Interview Test Project

This repository contains a modern React application developed for the CareoAi Frontend Engineer interview. It demonstrates React best practices, component-based architecture, pure CSS styling, and automated testing.

---

##  Overview

The app is a responsive user interface displaying a list of user cards. Each card includes:

- Name
- Position
- Profile image
- Message count
- Attachment count

Built with **React (CRA)** and styled using **pure CSS**, this project avoids external styling frameworks to maintain simplicity and control.

---

##  Features

- ** Component-Based Architecture**
  Reusable and modular components, such as the `Card` component.

- ** Pure CSS Styling**
  Responsive design with modular CSS and CSS variables for theming.

- ** Local Assets & Icons**
  SVG icons and user images integrated seamlessly into the UI.

- ** Automated Testing**
  Unit and integration tests powered by **Jest** and **React Testing Library**.

- **Responsive Layout**
  Custom media queries ensure adaptability across devices.

---

##  Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── SkylarImg.png
│   │   │   ├── AlfredoImg.png
│   │   │   └── JamesImg.png
│   │   └── icons/
│   │       └── icons.tsx
│   ├── components/
│   │   └── Card.tsx
│   ├── styles/
│   │   └── Card.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

### Notable Files

- `src/components/Card.tsx`: Displays user information and icons.
- `src/assets/images/`: Local user images.
- `src/assets/icons/`: SVG icons used across the UI.
- `src/styles/`: Pure CSS styling files.
- `src/App.tsx`: Main component rendering the app layout and cards.

---

## 🛠 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) (v6+)

###  Installation

```bash
git clone <https://github.com/CrtlRodz/careoai-interview>
cd <careoai-interview>
npm install
```

---

##  Running the App

To start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will reload on changes.

---

##  Running Tests

Run all tests with:

```bash
npm test
```

This runs the test suite in watch mode using Jest and React Testing Library.

---

##  Building for Production

To create an optimized build:

```bash
npm run build
```

The output will be in the `build/` folder, ready for deployment.

---

##  Contributing

Contributions are welcome!
Feel free to open an issue or submit a pull request.

Feedback from the CareoAi team is greatly appreciated.

---

##  License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.
