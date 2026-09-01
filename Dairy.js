const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const totalAmount = document.getElementById("totalAmount");
const orderForm = document.getElementById("orderForm");
const ordersList = document.getElementById("ordersList");

// Product prices
const prices = {
    Milk: {
        "1 Liter": 80
    },

    Curd: {
        "1/2 Kg Box": 50,
        "1 Kg Box": 100
    },

    Ghee: {
        "1/2 Kg": 450,
        "1 Kg": 900
    }
};

// Change quantity options when product changes
product.addEventListener("change", function () {

    quantity.innerHTML = '<option value="">Select Quantity</option>';

    const selectedProduct = product.value;

    if (selectedProduct && prices[selectedProduct]) {

        for (const item in prices[selectedProduct]) {

            const option = document.createElement("option");

            option.value = item;
            option.textContent =
                `${item} - ₹${prices[selectedProduct][item]}`;

            quantity.appendChild(option);
        }
    }

    totalAmount.value = "";
});

// Calculate total amount
quantity.addEventListener("change", function () {

    const selectedProduct = product.value;
    const selectedQuantity = quantity.value;

    if (selectedProduct && selectedQuantity) {

        const price = prices[selectedProduct][selectedQuantity];

        totalAmount.value = `₹${price}`;
    } else {

        totalAmount.value = "";
    }
});

// Add order
orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value;

    const phoneNumber =
        document.getElementById("phoneNumber").value;

    const pickupDate =
        document.getElementById("pickupDate").value;

    const order = document.createElement("div");

    order.classList.add("order");

    order.innerHTML = `
        <h3>👤 ${customerName}</h3>

        <p>📞 ${phoneNumber}</p>

        <p>🥛 Product: ${product.value}</p>

        <p>📦 Quantity: ${quantity.value}</p>

        <p>📅 Pickup Date: ${pickupDate}</p>

        <p>💰 Total: ${totalAmount.value}</p>

        <p>⏳ Status: <strong>Pending</strong></p>

        <button onclick="this.parentElement.remove()">
            Delete Order
        </button>
    `;

    ordersList.appendChild(order);

    orderForm.reset();

    quantity.innerHTML =
        '<option value="">Select Quantity</option>';

    totalAmount.value = "";
});