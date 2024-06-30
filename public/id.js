document.addEventListener('DOMContentLoaded', () => {
    const hidenid = document.getElementById('hidenid').value;
    console.log(hidenid)
    alert(hidenid)
    const userId = hidenid ;
    const userLinkhistory = document.getElementById('history');
    userLinkhistory.href = `/history?userId=${encodeURIComponent(userId)}`;
    const userLinkproduis = document.getElementById('produis');
    userLinkproduis.href = `/produis?userId=${encodeURIComponent(userId)}`;
  });