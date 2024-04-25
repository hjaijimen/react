@echo off

rem Create project directories
mkdir my-app\src\components\Auth my-app\src\components\Dashboard my-app\src\pages

rem Create main files
echo. > my-app\src\App.js
echo. > my-app\src\index.js
echo. > my-app\src\styles.css

rem Create component files
echo. > my-app\src\components\Header.js
echo. > my-app\src\components\Footer.js

rem Create page files
echo. > my-app\src\pages\Home.js
echo. > my-app\src\pages\AboutUs.js
echo. > my-app\src\pages\Contact.js
echo. > my-app\src\pages\NotFound.js
echo. > my-app\src\pages\DashboardPage.js
echo. > my-app\src\pages\NotificationPage.js
echo. > my-app\src\pages\RegulatoryUpdatePage.js
echo. > my-app\src\pages\InvoicesPage.js
echo. > my-app\src\pages\StatisticsPage.js
echo. > my-app\src\pages\LoginPage.js
echo. > my-app\src\pages\SignUpPage.js

rem Create additional component files
echo. > my-app\src\components\Auth\Login.js
echo. > my-app\src\components\Auth\SignUp.js
echo. > my-app\src\components\Dashboard\Dashboard.js
echo. > my-app\src\components\Dashboard\Statistics.js
echo. > my-app\src\components\Dashboard\RegulatoryUpdates.js
echo. > my-app\src\components\Dashboard\Invoices.js
echo. > my-app\src\components\Dashboard\OtherInfo.js
echo. > my-app\src\components\Dashboard\DashboardItem.js

rem Output success message
echo Project structure created successfully.
