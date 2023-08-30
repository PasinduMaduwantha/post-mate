let weights_costs = {
    "0-250g": "90.00",
    "250-500g": "110.00",
    "500-1000g": "130.00",
    "1000-1500g": "150.00",
    "1500-2000g": "200.00",
    "2000-2500g": "250.00",
    "2500-3000g": "300.00",
    "3000-4000g": "350.00",
    "4000-5000g": "400.00",
    "5000-6000g": "450.00",
    "6000-7000g": "500.00",
    "7000-8000g": "550.00",
    "8000-9000g": "600.00",
    "9000-10000g": "650.00",
    "10000-11000g": "700.00",
    "11000-12000g": "750.00",
    "12000-13000g": "800.00",
    "13000-14000g": "850.00",
    "14000-15000g": "900.00",
    "15000-16000g": "950.00",
    "16000-17000g": "1000.00",
    "17000-18000g": "1050.00",
    "18000-19000g": "1100.00",
    "19000-20000g": "1150.00",
};

const updateWeightCost = (newKey, newValue) => {
    if (weights_costs[newKey]) {
        weights_costs[newKey] = newValue; // Add the new key-value pair
    }
};

const removeKeyAndUpdateWeightCost = (oldKey, newKey, newValue) => {
    if (weights_costs[oldKey]) {
        delete weights_costs[oldKey]; // Remove the old key
        weights_costs[newKey] = newValue; // Add the new key-value pair
    }
};

export {weights_costs, updateWeightCost};
