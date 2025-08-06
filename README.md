
# Swati Salunkhe Backend

This is the backend server for the **Swati Salunkhe** official website. It uses **Express.js** and **MongoDB** to handle APIs, data storage, and backend logic for the [Swati-salunkhe-official-frontend](https://github.com/swatidhoke/Swati-salunkhe-official-frontend) repository.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Dotenv** for managing environment variables
- **CORS** for cross-origin requests
- **Nodemon** for development

---

## 📂 Folder Structure

```

📦 backend
├── 📁 config          # DB config
├── 📁 models          # Mongoose schemas
├── 📁 routes          # Express routes
├── 📁 controllers     # Route logic
├── 📄 server.js       # Main entry point
├── 📄 .env            # Environment variables
└── 📄 package.json    # Project metadata

````

---

## 🔧 Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/swatidhoke/swati-salunkhe-official-backend.git
cd swati-salunkhe-official-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the development server

```bash
npm run dev
```

The server should be running on `http://localhost:8080`.

---

## 📡 API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| GET    | /api/example | Fetch example data    |
| POST   | /api/example | Create new entry      |
| PUT    | /api/example | Update existing entry |
| DELETE | /api/example | Delete an entry       |



---

## 🔗 Frontend Repository

👉 [Swati-salunkhe-official-frontend](https://github.com/swatidhoke/Swati-salunkhe-official-frontend)

---

## 📬 Contact

For bugs or suggestions, feel free to raise an issue or connect with me on [LinkedIn](https://www.linkedin.com/in/swatidhoke).

---

## 📄 License

MIT License – © 2025 Swati Salunkhe

```


