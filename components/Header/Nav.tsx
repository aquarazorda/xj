export default function NavMenu() {
  return (
    <nav className="mainmenu" role="navigation">
      <ul>
        <li>
          <a href="index.php">News</a>
          <a href="forum.php">Forum</a>
          <a href="administration.php">Administration</a>
          <a href="rules.php">Rules</a>
          <a href="faq.php">FAQ</a>
          <a href="search.php">Search</a>
          <a href="application.php">Jobs</a>
          <a href="donators.php">Donators</a>
          <a href="warnings.php">Warnings</a>
          <a href="last_20_forum.php">Latest 20 Posts</a>
        </li>
      </ul>
    </nav>
  );
}
