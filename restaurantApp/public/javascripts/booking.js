function bookReservation() {
    $.get(`/api/?command=bookReservation&${name}&email=${email}&tel=${tel}&id=${id}`, (data) => {
        return data;
    });
}

function viewTables() {

}