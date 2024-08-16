<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ConnexCoin Interface</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">ConnexCoin</div>
        <div class="search-bar">
            <input type="text" placeholder="Search ConnexCoin...">
        </div>
        <div class="user-menu">
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">Logout</a>
        </div>
    </header>

    <div class="container">
        <aside class="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Network</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </aside>

        <main class="content">
            <div class="post">
                <form id="postForm">
                    <textarea placeholder="What's on your mind?"></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div class="feed">
                <!-- Posts will be dynamically loaded here -->
            </div>
        </main>
    </div>

    <footer>
        <p>&copy; 2024 ConnexCoin. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
