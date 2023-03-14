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
let priceValue = []
function resetInput(){
    document.getElementById('item').value = ''
    document.getElementById('quantity').value = ''
    document.getElementById('price').value = ''
}
function add(){
    
    
    let itemValue = document.getElementById('item').value;
    
    let quantity = document.getElementById('quantity').value;
    
    let price = document.getElementById('price').value;
    
    
    if(itemValue !== '' && quantity !== '' && price !== ''){
        itemList.push(itemValue);
        valueQuantity.push(quantity);
        priceValue.push(price);
    }else {
        alert('Chưa nhập thông tin')
    }
    
    
    display()
    resetInput()
}
function toUpparCase(){
    let str = document.getElementById('item').value.toLowerCase()
    document.getElementById('item').value = str.charAt(0).toUpperCase() +str.slice(1)
}
function display() {
    let display = `<tr>
  <th>STT</th>
  <th>Tên</th>
  <th>Số lượng</th>
  <th>Giá</th>
  <th>Sửa</th> 
  <th>Xóa</th>
</tr>`
    for (let i = 0; i < itemList.length; i++) {
        display += `<tr>
  <td>${i + 1}</td>
  <td>${itemList[i]}</td>
  <td>${valueQuantity[i]}</td>
  <td>${priceValue[i]}</td>
  <td><input onclick="edit(${i})" type="button" value="Sửa"></td>
  <td><input onclick="deleteItem(${i})" type="button" value="Xóa"></td>
</tr>`
    }
    document.getElementById('div').innerHTML = `<table>${display}</table>`;
}
function edit(index) {
    document.getElementById('item').value = itemList[index]
    document.getElementById('quantity').value = valueQuantity[index]
    document.getElementById('price').value = priceValue[index]
    document.getElementById('index').value = [index]
    document.getElementById('save').style.display = 'none'
    document.getElementById('update').style.display = 'inline-block'
    // itemList[index] = prompt('Sửa tên');
    // valueQuantity[index] = prompt('Nhập số lượng');
    // priceValue[index] = prompt('Nhập giá')
    display()
}
function updateItem(){
    let index = document.getElementById('index').value;
    itemList[index] = document.getElementById('item').value;
    valueQuantity[index] = document.getElementById('quantity').value
    
    priceValue[index] = document.getElementById('price').value
    
    document.getElementById('save').style.display = 'inline-block'
    document.getElementById('update').style.display = 'none'
    display()
    resetInput()
}

function deleteItem(index) {
    itemList.splice(index, 1);
    valueQuantity.splice(index,1);
    priceValue.splice(index,1)
    display()
}





















