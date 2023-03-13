class Item {
    constructor(itemName, quantity) {
        this.name = itemName;
        this.quantity = quantity;
    }

    getName() {
        return this.name;
    }

    setName(itemName) {
        this.name = itemName;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }
}
let itemList = []
let valueQuantity =[]
function add(){
    let itemValue = document.getElementById('item').value;
    itemList.push(itemValue);
    let quantity = document.getElementById('quantity').value;
    valueQuantity.push(quantity);
    display();
}
function display() {
    let display = `<tr>
  <th>STT</th>
  <th>Ten</th>
  <th>So luong</th>
  <th>Sua</th>
  <th>Xoa</th>
</tr>`
    for (let i = 0; i < itemList.length; i++) {
        display += `<tr>
  <td>${i + 1}</td>
  <td>${itemList[i]}</td>
  <td>${valueQuantity[i]}</td>
  <td><input onclick="edit(${i})" type="button" value="Sua"></td>
  <td><input onclick="deleteItem(${i})" type="button" value="Xoa"></td>
</tr>`
    }
    document.getElementById('div').innerHTML = `<table>${display}</table>`;
}
function edit(index) {
    itemList[index] = prompt('sua ten');
    valueQuantity[index] = prompt('nhap so luong');
    display()
}
function deleteItem(index) {
    itemList.splice(index, 1);
    valueQuantity.splice(index,1);
    display()
}















// function display(){
//     let display = `<tr>
//   <th>stt</th>
//   <th>item</th>
//   <th>quantity</th>
//   <th>edit</th>
//   <th>delete</th>
// </tr>
// `
//     for (let i = 0; i <display.length ; i++) {
//         display += `<tr>
//   <th>stt</th>
//   <th>item</th>
//   <th>quantity</th>
//   <th><input type="button" value="edit"></th>
//   <th><input type="button" value="delete"></th>
// </tr>
// `
//     }
//     document.getElementById('table').innerHTML = `<table>${display}</table>`;
// }









