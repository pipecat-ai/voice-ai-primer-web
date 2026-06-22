// Append a shareable "#" anchor link to each section heading that has an id.
// Clicking it navigates in the same tab (URL updates to the heading's #id),
// so the browser back button returns to where the reader was.
document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('h1[id], h2[id], h3[id]');

  headings.forEach(heading => {
    const link = document.createElement('a');
    link.className = 'header-anchor';
    link.href = `#${heading.id}`;
    link.textContent = '#';
    link.setAttribute('aria-label', 'Link to this section');
    link.setAttribute('title', 'Link to this section');
    heading.appendChild(link);
  });
});
