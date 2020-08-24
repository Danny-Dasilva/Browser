function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList(e) {
    console.log(e)
}

addContact(1, refreshContactList);