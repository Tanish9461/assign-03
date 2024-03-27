document.addEventListener('DOMContentLoaded', function () {
    // Dynamic student information (can be replaced or dynamically fetched)
    document.getElementById('studentInfo').innerText = "Cadet ID: 200552822, Name: Tanish";

    const deliveryCheckbox = document.getElementById('deliveryOption');
    const addressSection = document.getElementById('addressSection');
    const orderButton = document.getElementById('orderButton');

    // Toggle delivery address section
    deliveryCheckbox.addEventListener('change', function () {
        if (this.checked) {
            addressSection.style.display = 'block';
        } else {
            addressSection.style.display = 'none';
        }
    });

    // Handle form submission
    orderButton.addEventListener('click', function() {
        const customerEmail = document.getElementById('customerEmail').value;
        if (!customerEmail) {
            alert("Please enter your communication channel (email).");
            return; // Stop the function if no email is entered.
        }

        // Continue with the existing order capture
        const pizzaSize = document.getElementById('pizzaSize').value;
        const pizzaCrust = document.getElementById('pizzaCrust').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(e => e.value);
        const customerName = document.getElementById('customerName').value;
        const delivery = deliveryCheckbox.checked;
        const deliveryAddress = delivery ? document.getElementById('deliveryAddress').value : 'N/A';

        const orderSummary = `Order Summary:
        <br>Galaxy Size: ${pizzaSize.toUpperCase()}
        <br>Crust Composition: ${pizzaCrust.toUpperCase()}
        <br>Interstellar Toppings: ${toppings.join(', ') || 'None'}
        <br>Space Extras: ${extras.join(', ') || 'None'}
        <br>Space Explorer: ${customerName}
        <br>Comms Channel: ${customerEmail} (mandatory)
        <br>Warp Speed Delivery: ${delivery ? 'Yes' : 'No'}
        <br>Galactic Coordinates: ${deliveryAddress}`;

        document.getElementById('orderSummary').innerHTML = orderSummary;
        document.getElementById('orderSummary').style.display = 'block';
    });
});
