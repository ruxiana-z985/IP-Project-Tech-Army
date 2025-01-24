
body {
  font-family: "Roboto";
  background-color: #fff;
  margin: 0;
  padding: 0 40px 0 24px;
}

h2 {
  font-size: 18px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  padding: 0px 24px;
  font-size: 14px;
  position: sticky;
  top: 0;
  margin: 0;
  background-color: #fff;
}

.notification-container {
  padding: 24px;
  color: #000;
}

.notification-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info .details {
  font-size: 14px;
}

.user-info .details span {
  display: block;
  color: #737373;
  font-size: 12px;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  appearance: none;
  background: none;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  padding: 7px 16px !important;
  pointer-events: auto;
  text-overflow: ellipsis;
  text-transform: inherit;
  width: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  line-height: 18px;
}

.actions .follow-btn {
  background-color: rgb(0, 149, 246);
  color: #fff;
}

.actions .follow-btn:hover {
  background-color: rgb(24, 119, 242);
}

.actions .remove-btn {
  background-color: white;
  color: #737373;
}

.see-all {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #0095f6;
  cursor: pointer;
}


@media (max-width: 768px) {
  body {
    padding: 0 16px; 
  }

  h2 {
    font-size: 16px; 
  }

  .header {
    padding: 10px 16px;
    font-size: 12px;
  }

  .notification-container {
    padding: 16px; 
  }

  .notification-item {
    flex-direction: row; 
    align-items: flex-start; 
    margin-bottom: 12px; 
    padding: 8px; 
    border-radius: 8px; 
  }

  .user-info img {
    width: 40px; 
    height: 40px;
    margin-right: 8px;
  }

  .user-info .details {
    font-size: 12px; 
  }

  .user-info .details span {
    font-size: 11px; 
  }

  .actions button {
    font-size: 12px; 
    padding: 6px 12px; 
    margin-left: 8px;
    border-radius: 6px; 
  }

  .actions button {
    width: 100%; 
    margin: 4px 0; 
  }

  .see-all {
    font-size: 12px;
    margin-top: 16px; 
  }
}

