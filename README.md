# README: Installing Node.js, Running a Vite Project, and Installing XAMPP

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

## 📌 2. Create and Run a Vite Project

Vite is a fast frontend tool for developing modern web apps.

### **Create a new Vite project:**

```
npm create vite@latest
```

### **Enter your project:**

```
cd my-project
```

### **Install dependencies:**

```
npm install
```

### **Run the development server:**

```
npm run dev
```

You will see a local URL like:

```
http://localhost:5173/
```

Open it in your browser to view your project.

---

## 📌 3. Install XAMPP

XAMPP allows you to run Apache, PHP, and MySQL locally.

### **Steps to install XAMPP:**

1. Go to the official XAMPP website.
2. Download the XAMPP installer for Windows.
3. Run the installer and follow the steps.
4. After installation, open **XAMPP Control Panel**.
5. Click **Start** on:

   * Apache
   * MySQL
6. Visit:

```
http://localhost/
```

You should see the XAMPP dashboard.

---

## ✔️ Done!

You now know how to:

* Install Node.js
* Create and run a Vite project
* Install and start XAMPP

Use this guide whenever you set up a new machine or project.
