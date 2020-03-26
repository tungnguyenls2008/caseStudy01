function Product( name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status) {

    this.name = name;
    this.desc = desc;
    this.quantity = quantity;
    this.image = image;
    /*this.type = type;*/
    this.unit = unit;
    this.weight = weight;
    this.height = height;
    this.length = length;
    this.width = width;
    this.provider = provider;
    this.origin = origin;
    this.dest = dest;
    this.transporter = transporter;
    this.transMethod = transMethod;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.dateIn = dateIn;
    this.dateOut = dateOut;
    this.status = status;
}


function getValue(id) {
    return document.getElementById(id).value;
}

function getElement(id) {
    return document.getElementById(id);
}

function showForm() {
    document.getElementById("form-input").style.display = "block";
}

function closeForm() {
    document.getElementById("form-input").style.display = "none";
}

function authorizeAccess() {
    getElement('authorizeInfo').innerHTML = "Authorized, press CONFIRM PACKAGE INFORMATION to save your order.";
    getElement('confirm').disabled = false;
}

function resetAuthorization() {
    getElement('authorizeInfo').innerHTML = "";
    getElement('confirm').disabled = true;
}

function ProductManager() {
    this.confirmPackageInformation = function () {

        let name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest,
            transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status;
        name = getElement('name').value;
        desc = getElement('desc').value;
        quantity = getElement('quantity').value;
        image = getElement('image').value;
        /*type=document.getElementsByName(type[value]).id;*/
        unit = getElement('unit').value;
        weight = getElement('weight').value;
        height = getElement('height').value;
        length = getElement('length').value;
        width = getElement('width').value;
        provider = getElement('provider').value;
        origin = getElement('origin').value;
        dest = getElement('dest').value;
        transporter = getElement('transporter').value;
        transMethod = getElement('transMethod').value;
        timeIn = getElement('timeIn').value;
        timeOut = getElement('timeOut').value;
        dateIn = getElement('dateIn').value;
        dateOut = getElement('dateOut').value;
        status = productStatus();

        let product = new Product(name, desc, quantity, image/*, type*/, unit, weight, height, length,
            width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status);
        this.addProduct(product);
        console.log(JSON.stringify(product));
        document.getElementById('package_list').hidden=false;

    };
    this.getProductToLocalStorage = function () {
        return localStorage.getItem('data');
    };
    this.storeData = function (data) {
        localStorage.setItem('data', JSON.stringify(data));
    };
    this.addProduct = function (p) {
        let products = this.getProductToLocalStorage();
        products=JSON.parse(products);
        if (!products) {
            products = [];
        }
        products.push(p);
        /*console.log(products);*/
        this.storeData(products);
    };
    this.showProduct = function () {
        let arr = [];
        let products = this.getProductToLocalStorage();
       /* console.log(products);*/
        products=JSON.parse(products);

        for (let i = 0; i < products.length; i++) {
            let product = {
                id: i, name:products[i].name, desc:products[i].desc, quantity:products[i].quantity, image:products[i].image
                /*, type*/, unit:products[i].unit, weight:products[i].weight, height:products[i].height, length:products[i].length,
                width:products[i].width, provider:products[i].provider, origin:products[i].origin, dest:products[i].dest,
                transporter:products[i].transporter, transMethod:products[i].transMethod, timeIn:products[i].timeIn,
                timeOut:products[i].timeOut, dateIn:products[i].dateIn, dateOut:products[i].dateOut, status:products[i].status
            };

            arr.push(product);
        }
        return arr;
    };
    this.showListProduct = function () {
        let arr = productManager.showProduct();
        let html = '';
        for (let i = 0; i < arr.length; i++) {
            html += "<tr>";
            html += "<td class=\"packageListTd\">" + padLeft(i + 1, 5) + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].name + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].desc + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].quantity + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].image + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].unit + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].weight + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].height + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].length + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].width + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].origin + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].status + "</td>";
            html += "<td class=\"packageListTd\"><button type=\"button\" onclick=\"editProductRow(this)\">EDIT</button><br><button type=\"button\" onclick=\"productManager.deleteProductRow(this)\">DELETE</button></td>"+
            "</td>";
            html += "</tr>";
        }
        getElement('list_product').innerHTML = html;
    };
    this.deleteProductRow=function (r) {
        let i = r.parentNode.parentNode.rowIndex;
        document.getElementById("package_list").deleteRow(i);
        let products=this.getProductToLocalStorage();
        products=JSON.parse(products);
        let tempArr=[];
        for (let j = 0; j <products.length ; j++) {
            if(i-1!==j){
                tempArr.push(products[j]);
            }
        }
        this.storeData(tempArr);
    };
    this.editProductRow=function (r) {
        let i = r.parentNode.parentNode.rowIndex;
        document.getElementById("package_list").deleteRow(i);
        let products=this.getProductToLocalStorage();
        products=JSON.parse(products);

        document.getElementById('name').value=products[i].name;
    }
}

/*localStorage.clear();*/
let productManager = new ProductManager();

function disableConfirmationBtn() {
    getElement('confirm').disabled = true;
}

function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}
function productStatus() {
    return document.getElementsByName('status').value;
}
function clearLocalStorage() {
return localStorage.clear();
}
function showLocalStorage() {
    productManager.showListProduct();
    document.getElementById('package_list').hidden=false;
}
function hideLocalStorage() {
    document.getElementById('package_list').hidden=true;
}


