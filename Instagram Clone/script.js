const followButtons = document.querySelectorAll('.follow-btn');
followButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'Follow') {
      button.textContent = 'Following';
      button.style.background = "rgb(239, 239, 239)";
      button.style.color = "black";
    } else {
      button.textContent = 'Follow';
      button.style.background = "";  // Revert to default background color
      button.style.color = "";  // Revert to default text color
    }
  });
});

const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const notificationItem = button.closest('.notification-item');
    if (notificationItem) {
      notificationItem.remove();
    }
  });
});


