# 🐶 RB Dogs

A React-based web application developed as part of the **[RB Pharma](https://www.linkedin.com/company/rb-pharma/) recruitment process** for the **Front-End Developer** position.  
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and consumes the [Dog CEO REST API](https://dog.ceo/api/breeds/list/all) to display a paginated grid of dog breeds, with a clean, modern UI built using **Material UI** and **Emotion**.

## 📋 Features

- **Dynamic Grid of Dog Breeds**  
  Uses Flexbox for responsive layout. Displays all breeds from the API with pagination.

- **Paging Support**  
  Navigate through breeds with simple, intuitive pagination controls.

- **Loading States**  
  Visual indicators while fetching data from the API.

- **Error Handling**  
  Gracefully handles API errors with user-friendly messages.

- **Modern UI**  
  Styled with **Material UI** components and **Emotion** for custom CSS-in-JS styling.

## Demo

[Live Demo](https://guilhermesgsilva.github.io/rb-dogs/)

## 🛠️ Tech Stack

- **React** (functional components + hooks)
- **Material UI** (UI components)
- **Emotion** (styling)
- **Dog CEO API** (data source)
- **JavaScript (ES6+)**
- **Flexbox** (grid layout)

## 📦 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/guilhermesgsilva/rb-dogs.git
   cd rb-dogs
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

4. Open the app in your browser at `http://localhost:3000/`

## 📂 Project Structure

```
src/
  ├── api/               # API service calls
  ├── components/        # Reusable components (List, Item, etc.)
  ├── context/           # 
  ├── pages/             # Page-level components
  ├── state/             # 
  ├── App.js             # Root application component
  └── index.js           # Entry point
```

## 🚀 Usage

1. Open the app in your browser.
2. Browse the list of dog breeds in a paginated grid.
3. If an error occurs, a friendly error message will be shown.
4. While fetching data, a loading spinner is displayed.

--

Developed by [Guilherme Silva](https://github.com/guilhermesgsilva)
