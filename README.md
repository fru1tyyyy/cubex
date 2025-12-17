# README: Installing Node.js, Running a Vite Project, Backend Setup, and Installing XAMPP

## 📌 1. Install Node.js

Node.js is required to run JavaScript on your computer and to use Vite.

### **Step-by-step guide:**

1. Go to the official Node.js website.
2. Click **LTS (Recommended)** download.
3. Run the installer.
4. Keep clicking **Next** until installation completes.
5. After installation, open **Command Prompt** and type:

```
node -v
npm -v
```

If both show version numbers, Node.js is successfully installed.

---

## 📌 2. Create and Run the Vite (Frontend) Project

Vite is a fast frontend tool for developing modern web apps.

### **Enter your project folder:**

Example project path: `E:\coding\cubex` then cd ur folder path

```
cd cubex
```

### **Install frontend dependencies:**

```
npm install
```

### **Run the frontend development server:**

```
npm run dev
```

You will see a local URL like:

```
http://localhost:5173/
```

Open it in your browser to view the frontend.

---

## 📌 3. Backend Setup (Node.js + Express)

The backend handles server-side logic such as authentication, database access, and APIs.

⚠️ **Do this after running `npm run dev` for the frontend.**

### **Navigate to the backend folder:**

```
cd cubex\backend
```

### **Install backend dependencies:**

```
npm install
```

### **Run the backend server:**

```
npx ts-node server.ts
```

If successful, the backend will show a success message

```
connected!!!
```

Keep the backend running while using the frontend.

---

## 📌 4. Install XAMPP (Database Setup)

XAMPP allows you to run Apache and MySQL locally for database management.

### **Steps to install XAMPP:**

1. Go to the official XAMPP website.
2. Download the XAMPP installer for Windows.
3. Run the installer and follow the steps.
4. Open **XAMPP Control Panel**.
5. Click **Start** on:

   * Apache
   * MySQL

---

## 📌 5. Create Database and Import SQL

### **Open phpMyAdmin:**

```
http://localhost/phpmyadmin
```

### **Create a new database:**

1. Click **New** on the left sidebar.
2. Enter a database name (must be: `cubex`).
3. Click **Create**.

### **Import SQL file:**

1. Click on the newly created database.
2. Go to the **Import** tab.
3. Click **Choose File**.
4. Select the provided `.sql` file.
5. Click **Go**.

If successful, the tables will be created automatically.

---

## ✔️ Done!

You now know how to:

* Install Node.js
* Run the Vite frontend
* Run the Node.js backend
* Install XAMPP
* Create a database and import SQL

Use this guide whenever you set up a new machine or project.
