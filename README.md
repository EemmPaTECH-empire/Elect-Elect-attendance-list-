<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UYO EEE Attendance Portal</title>
  <link rel="stylesheet" href="style.css">
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
  <!-- jsPDF for PDF generation in Cloud Functions -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
  <header>
    <h1>University of UYO – 100 Level</h1>
    <h2>Electrical & Electronic Engineering Attendance Portal</h2>
  </header>

  <main>
    <div class="attendance-container">
      <p id="currentLecture"></p>

      <form id="attendanceForm">
        <input type="text" id="studentName" placeholder="Full Name" required>
        <input type="text" id="regNumber" placeholder="Registration Number" required>
        <button type="submit">Submit Attendance</button>
      </form>

      <p id="successMessage"></p>
    </div>
  </main>

  <footer>
    © 2026 – A product of EemmPaTECH-EMPIRE
  </footer>

  <script src="firebase-config.js"></script>
  <script src="script.js"></script>
</body>
</html>