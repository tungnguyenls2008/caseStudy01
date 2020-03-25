function Product(id, name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status) {
    this.id = id;
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

    this.setName = function () {
        this.name = getValue('name');
        localStorage.name = getValue('name');
    };
    this.getName = function () {
        return this.name;
    };
    this.setDesc = function () {
        this.desc = getValue('desc');
        localStorage.desc = getValue('desc');
    };
    this.getDesc = function () {
        return this.desc;
    };
    this.setQuantity = function () {
        this.quantity = getValue('quantity');
        localStorage.quantity = getValue('quantity');
    };
    this.getQuantity = function () {
        return this.quantity;
    };
    this.setImage = function () {
        this.image = getValue('image');
        localStorage.image = getValue('image');
    };
    this.getImage = function () {
        return this.image;
    };
    this.setType = function () {
        this.type = getValue('type');
        localStorage.type = getValue('type');
    };
    this.getType = function () {
        return this.type;
    };
    this.setUnit = function () {
        this.unit = getValue('unit');
        localStorage.unit = getValue('unit');
    };
    this.getUnit = function () {
        return this.unit;
    };
    this.setWeight = function () {
        this.weight = getValue('weight');
        localStorage.weight = getValue('weight');
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setHeight = function () {
        this.height = getValue('height');
        localStorage.height = getValue('height');
    };
    this.getHeight = function () {
        return this.height;
    };
    this.setLength = function () {
        this.length = getValue('length');
        localStorage.Plength = getValue('length');
    };
    this.getLength = function () {
        return this.length;
    };
    this.setWidth = function () {
        this.width = getValue('width');
        localStorage.width = getValue('width');
    };
    this.getWidth = function () {
        return this.width;
    };
    this.setProvider = function () {
        this.provider = getValue('provider');
        localStorage.provider = getValue('provider');
    };
    this.getProvider = function () {
        return this.provider;
    };
    this.setOrigin = function () {
        this.origin = getValue('origin');
        localStorage.origin = getValue('origin');
    };
    this.getOrigin = function () {
        return this.origin;
    };
    this.setDest = function () {
        this.dest = getValue('dest');
        localStorage.dest = getValue('dest');
    };
    this.getDest = function () {
        return this.dest;
    };
    this.setTransporter = function () {
        this.transporter = getValue('transporter');
        localStorage.transporter = getValue('transporter');
    };
    this.getTransporter = function () {
        return this.transporter;
    };
    this.setTransMethod = function () {
        this.transmethod = getValue('transMethod');
        localStorage.transMethod = getValue('transMethod');
    };
    this.getTransMethod = function () {
        return this.transmethod;
    };
    this.setTimeIn = function () {
        this.timeIn = getValue('timeIn');
        localStorage.timeIn = getValue('timeIn');
    };
    this.getTimeIn = function () {
        return this.timeIn;
    };
    this.setTimeOut = function () {
        this.timeOut = getValue('timeOut');
        localStorage.timeOut = getValue('timeOut');
    };
    this.getTimeOut = function () {
        return this.timeOut;
    };
    this.setDateIn = function () {
        this.dateIn = getValue('dateIn');
        localStorage.dateIn = getValue('dateIn');
    };
    this.getDateIn = function () {
        return this.dateIn;
    };
    this.setDateOut = function () {
        this.dateOut = getValue('dateOut');
        localStorage.dateOut = getValue('dateOut');
    };
    this.getDateOut = function () {
        return this.dateOut;
    };
    this.setStatus = function () {
        this.status = getValue('status');
        localStorage.status = getValue('status')
    };
    this.getStatus = function () {
        return this.status;
    }
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
        status = document.getElementsByName('status').id;

        let product = new Product(name, desc, quantity, image/*, type*/, unit, weight, height, length, width, provider, origin, dest, transporter, transMethod, timeIn, timeOut, dateIn, dateOut, status);
        this.addProduct(product);
        console.log(Product);

    };
    this.getProductToLocalStorage = function () {
        return localStorage.getItem('data');
    };
    this.storeData = function (data) {
        localStorage.setItem('data', JSON.stringify(data));
    };
    this.addProduct = function (p) {
        let products = this.getProductToLocalStorage();
        if (!products) {
            products = [];
        }
        products.push(p);
        console.log(products);
        this.storeData(products);
    };
    this.showProduct = function () {
        let arr=[];
        for (let i = 0; i < 10; i++) {
            let product = {
                id: i, name: Product.name, quantity: Product.quantity, dest: Product.dest, status: Product.status

            };
            arr.push(product);
        }console.log(arr);
        return arr;
    };
    this.showListProduct = function () {
        let arr=productManager.showProduct();
        let html='';
        for (let i = 0; i < arr.length; i++) {
            html+="<tr>";
            html+="<td class=\"packageListTd\">"+i+"</td>";
            html+="<td class=\"packageListTd\">"+arr[i].name+"</td>";
            html+="<td class=\"packageListTd\">"+arr[i].quantity+"</td>";
            html+="<td class=\"packageListTd\">"+arr[i].dest+"</td>";
            html+="<td class=\"packageListTd\">"+arr[i].status+"</td>";
            html+="</tr>";
        }getElement('list_product').innerHTML=html;
    }
}

let productManager = new ProductManager();

