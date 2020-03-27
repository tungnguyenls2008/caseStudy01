function Product(name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut) {

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

}


/*function getValue(id) {
    return document.getElementById(id).value;
}*/

function getElement(id) {
    return document.getElementById(id);
}

function showForm() {
    document.getElementById("form-input").style.display = "block ";
    document.getElementById("form-input").style.transition = "width .35s ease-in-out ";

}

function closeForm() {
    document.getElementById("form-input").style.display = "none";

}

function resetAuthorization() {
    getElement('authorizeInfo').innerHTML = "";
    getElement('confirm').disabled = true;
}

function ProductManager() {


    /* this.finalize = function(){
         this.storeData();
         alert("finalize done!");
     };*/


    this.confirmPackageInformation = function () {

        let name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest,
            transporter, transMethod, timeIn, timeOut, dateIn, dateOut;
        name = getElement('name').value;
        desc = getElement('desc').value;
        quantity = getElement('quantity').value;
        image = getElement('display').innerHTML;
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


        let product = new Product(name, desc, quantity, image/*, type*/, unit, weight, height, length,
            width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut);
        this.addProduct(product);
        /*console.log(JSON.stringify(product));*/
        getElement('confirm').value = 'CONFIRM PRODUCT INFORMATION';
        document.getElementById('package_list').hidden = false;

    };

    this.getProductToLocalStorage = function () {
        return localStorage.getItem('data');
    };
    this.storeData = function () {
        localStorage.setItem('data', JSON.stringify(this.productList));
    };


    let products = this.getProductToLocalStorage();
    this.productList = JSON.parse(products);
console.log(this.productList);

    this.addProduct = function (p) {
        if (!this.productList) {
            this.productList = [];
        }
        this.productList.push(p);
        this.storeData();
        this.showListProduct();

    };

    this.showListProduct = function () {

        let arr = this.productList;

        let html = '';
        for (let i=0;i<arr.length;i++) {
            html += "<tr id=\"tr_" + i + "\">";
            html += "<td class=\"packageListTd\">" + padLeft(i+1, 5) + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].name + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].desc + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].quantity + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].image + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].unit + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].weight + "kgs"+ "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].height + "cm"+ "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].length + "cm"+ "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].width + "cm"+ "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].provider + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].origin + "</td>";
            html += "<td class=\"packageListTd\">" + arr[i].dest + "</td>";
            html += "<td class=\"packageListTd\"><button type=\"button\" onclick=\"productManager.editRow(" + i + ");productManager.deleteRow(" + (i) + ")\">EDIT</button><br><button type=\"button\" onclick=\"productManager.confirmDeleteProduct(" + i + ")\">DELETE</button><br><button onclick='productManager.duplicateProduct(" + i + ")'>DUPLICATE</button></td>" +
                "</td>";
            html += "</tr>";
        }
        getElement('list_product').innerHTML = html;
    };
    this.confirmDeleteProduct = function (i) {
        let confirm = prompt("Type YES to delete product");
        if (confirm === "YES") {
            this.deleteRow(i)
        } else {
            alert("Thanks for nothing.");
        }
    };

    this.deleteRow = function (rowId) {
        let row = document.getElementById("tr_" + rowId);
        row.parentNode.removeChild(row);
        let tmpArr = [];
        for (i in this.productList) {
            if (i != rowId)
                tmpArr.push(this.productList[i]);
        }
        this.productList = tmpArr;
        this.storeData();
        this.showListProduct();
    };
    this.editRow = function (index) {


        getElement('name').value = this.productList[index].name;
        getElement('desc').value = this.productList[index].desc;
        getElement('quantity').value = this.productList[index].quantity;
        getElement('display').innerHTML = this.productList[index].image;
        getElement('unit').value = this.productList[index].unit;
        getElement('weight').value = this.productList[index].weight;
        getElement('height').value = this.productList[index].height;
        getElement('length').value = this.productList[index].length;
        getElement('width').value = this.productList[index].width;
        getElement('provider').value = this.productList[index].provider;
        getElement('origin').value = this.productList[index].origin;
        getElement('confirm').value = 'UPDATE PRODUCT INFORMATION';

        /*document.getElementById('status').value = this.productList[index].status;*/
        showForm();
        /*this.deleteRow(index);*/
        /*let name, desc, quantity, image/!*, type*!/, unit, weight, height, length, width, provider, origin, dest,
            transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status;
        if (getElement('name').value == '') {
            name = getElement('name').placeholder;
        } else {
            name = getElement('name').value;
        }
        if (getElement('desc').value == '') {
            desc = getElement('desc').placeholder;
        } else {
            desc = getElement('desc').value;
        }
        if (getElement('quantity').value == '') {
            quantity = getElement('quantity').placeholder;
        } else {
            quantity = getElement('quantity').value;
        }
        image = getElement('image').value;
        if (getElement('unit').value == '') {
            unit = getElement('unit').placeholder;
        } else {
            unit = getElement('unit').value;
        }
        if (getElement('weight').value == '') {
            weight = getElement('weight').placeholder;
        } else {
            weight = getElement('weight').value;
        }
        if (getElement('height').value == '') {
            height = getElement('height').placeholder;
        } else {
            height = getElement('height').value;
        }
        if (getElement('length').value == '') {
            length = getElement('length').placeholder;
        } else {
            length = getElement('length').value;
        }
        if (getElement('width').value == '') {
            width = getElement('width').placeholder;
        } else {
            width = getElement('width').value;
        }
        if (getElement('provider').value == '') {
            provider = getElement('provider').placeholder;
        } else {
            provider = getElement('provider').value;
        }
        if (getElement('origin').value == '') {
            origin = getElement('origin').placeholder;
        } else {
            origin = getElement('origin').value;
        }
        if (getElement('dest').value == '') {
            dest = getElement('dest').placeholder;
        } else {
            dest = getElement('dest').value;
        }
        if (getElement('transporter').value == '') {
            transporter = getElement('transporter').placeholder;
        } else {
            transporter = getElement('transporter').value;
        }
        if (getElement('transMethod').value == '') {
            transMethod = getElement('transMethod').placeholder;
        } else {
            transMethod = getElement('transMethod').value;
        }
        timeIn = getElement('timeIn').value;
        timeOut = getElement('timeOut').value;
        dateIn = getElement('dateIn').value;
        dateOut = getElement('dateOut').value;
        status = productStatus();*/

        let name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest,
            transporter, transMethod, timeIn, timeOut, dateIn, dateOut;
        name = getElement('name').value;
        desc = getElement('desc').value;
        quantity = getElement('quantity').value;
        image = getElement('display').innerHTML;
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


        this.productList[index]=new Product(name, desc, quantity, image/*, type*/, unit, weight, height, length,
            width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut);
    };
    this.duplicateProduct=function (i) {
        this.productList.push(this.productList[i]);
        this.storeData();
        this.showListProduct();
    };
    let attempt = 3;
    this.validateLogin=function () {

        let username = document.getElementById("employee").value;
        let password = document.getElementById("authKey").value;
            if ( username === "john" && password === "123"){
                getElement('authorizeInfo').innerHTML = "ACCESS AUTHORIZED, press CONFIRM PACKAGE INFORMATION to save your order.";
                getElement('confirm').disabled = false;
                return false;
            }
            else{
                attempt --;
                getElement('authorizeInfo').innerHTML = "ACCESS DENIED. You have "+attempt+" attempts left.";

                if( attempt == 0){
                    document.getElementById("employee").disabled = true;
                    document.getElementById("authKey").disabled = true;
                    document.getElementById("authorizeAccess").disabled = true;
                    getElement('authorizeInfo').innerHTML = "SYSTEM COMPROMISED. Contact your supervisor, or press F5 if you're a hacker.";

                    return false;
                }
            }
        };
    this.confirmClearList=function () {
        let confirm = prompt("Type CLEAR to clear the product list, this action is NOT revertible");
        if (confirm === "CLEAR") {
            clearLocalStorage();
            location.reload();
        } else {
            alert("Thanks for nothing.");
        }
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



function clearLocalStorage() {
    return localStorage.clear();
}

function showLocalStorage() {
    productManager.showListProduct();
    document.getElementById('package_list').hidden = false;
}

function hideLocalStorage() {
    document.getElementById('package_list').hidden = true;
}

let loadFile = function(event) {
    let image = document.getElementById('display');
    image.src = URL.createObjectURL(event.target.files[0]);
};

