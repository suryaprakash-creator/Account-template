// Array to store accounts
const accounts = [];

// Add new account
function addAccount() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Check for duplicate email
  const existing = accounts.find(acc => acc.email === email);
  if (existing) {
    alert('Account with this email already exists.');
    return;
  }

  const account = {
    id: Date.now(),
    name: name,
    email: email
  };

  accounts.push(account);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';

  displayAccounts();
}

// Delete account
function deleteAccount(id) {
  const index = accounts.findIndex(acc => acc.id === id);
  if (index !== -1) {
    accounts.splice(index, 1);
    displayAccounts();
  }
}

// Display all accounts
function displayAccounts() {
  const list = document.getElementById('accountList');
  list.innerHTML = '';

  if (accounts.length === 0) {
    list.innerHTML = '<p style="text-align:center;">No accounts available.</p>';
    return;
  }

  accounts.forEach(account => {
    const item = document.createElement('div');
    item.className = 'account-item';
    item.innerHTML = `
      <div class="account-info">
        <strong>${account.name}</strong><br/>
        ${account.email}
      </div>
      <button class="delete-btn" onclick="deleteAccount(${account.id})">Delete</button>
    `;
    list.appendChild(item);
  });
}

// Search account by email
function searchAccount() {
  const searchEmail = prompt("Enter email to search:");
  if (!searchEmail) return;

  const account = accounts.find(acc => acc.email === searchEmail.trim());
  if (account) {
    alert(`Account Found:\nName: ${account.name}\nEmail: ${account.email}`);
  } else {
    alert("No account found with that email.");
  }
}

// Count accounts
function countAccounts() {
  alert(`Total accounts: ${accounts.length}`);
}
