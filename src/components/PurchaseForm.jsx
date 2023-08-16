import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PurchaseForm = ({ rawMaterialName, onSubmit }) => {
  const [purchases, setPurchases] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handlePurchaseSubmit = (data) => {
    // Calculate Grand Total
    const grandTotal =
      parseFloat(data.purchasePrice) +
      parseFloat(data.totalTransportationCost || 0) +
      parseFloat(data.totalLaborCost || 0);

    // Create new purchase object
    const newPurchase = {
      purchaseId: Math.floor(Math.random() * 1000),
      rawMaterialName: rawMaterialName,
      ...data,
      grandTotal: grandTotal.toFixed(2),
    };

    // Add new purchase to the list
    setPurchases([...purchases, newPurchase]);
    onSubmit(newPurchase);

    // Reset the form
    reset();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Purchase Management</h2>

      {/* Purchase Adding */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Purchase Adding</h3>
        <form
          onSubmit={handleSubmit(handlePurchaseSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          {/* Input fields */}
          <input
            type="text"
            placeholder="Invoice Number"
            {...register("invoiceNumber", { required: true })}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Supplier Name"
            {...register("supplierName", { required: true })}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Warehouse Name */}
          <input
            type="text"
            value="Restaurant Warehouse"
            readOnly
            className="border border-gray-300 p-2 rounded"
          />
          {/* Raw Material Name */}
          <input
            type="text"
            placeholder="Raw Material Name"
            {...register("rawMaterialName", { required: true })}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Quantity */}
          <input
            type="number"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Purchase Price */}
          <input
            type="number"
            placeholder="Purchase Price"
            {...register("purchasePrice", { required: true })}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Total Transportation Cost */}
          <input
            type="number"
            placeholder="Total Transportation Cost"
            {...register("totalTransportationCost")}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Total Labor Cost */}
          <input
            type="number"
            placeholder="Total Labor Cost"
            {...register("totalLaborCost")}
            className="border border-gray-300 p-2 rounded"
          />
          {/* Note for purchase and staff */}
          <textarea
            placeholder="Note for purchase and staff"
            {...register("note")}
            className="border border-gray-300 p-2 rounded col-span-2"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded col-span-2"
          >
            Create Purchase
          </button>
        </form>
      </div>

      {/* Purchase List */}
      {/* ... (Rest of the code for Purchase List) */}
    </div>
  );
};

export default PurchaseForm;
