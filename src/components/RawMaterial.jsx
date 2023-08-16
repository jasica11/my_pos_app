import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import PurchaseForm from "./PurchaseForm";

const RawMaterial = () => {
  const [rawMaterials, setRawMaterials] = useLocalStorageState(
    [],
    "rawMaterials"
  );
  const [selectedRawMaterial, setSelectedRawMaterial] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const storedMaterials = localStorage.getItem("rawMaterials");
    if (storedMaterials) {
      setRawMaterials(JSON.parse(storedMaterials));
    }
  }, [setRawMaterials]);

  const handleAddRawMaterial = (data) => {
    if (data.rawMaterial.trim() !== "") {
      setRawMaterials([...rawMaterials, { name: data.rawMaterial }]);
      reset();
      console.log(data);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Raw Materials</h2>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          Purchase Material
        </button>
      </div>
      <div className="mb-4">
        <form
          onSubmit={handleSubmit(handleAddRawMaterial)}
          className="flex items-center gap-4"
        >
          <input
            type="text"
            className="border rounded-l px-2 py-1 flex-grow border-gray-500"
            placeholder="Raw Material Name"
            {...register("rawMaterial", { required: true })}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-s flex items-center border-green-800"
          >
            Add <FaPlus className="ml-2" />
          </button>
        </form>
      </div>
      <div>
        {rawMaterials.map((material, index) => (
          <div
            key={index}
            className="border p-2 flex items-center cursor-pointer mb-2"
            style={{ minHeight: "40px" }}
          >
            <div className="flex-grow">{material.name}</div>
          </div>
        ))}
      </div>
      {showForm && (
        <PurchaseForm
          rawMaterialName={selectedRawMaterial}
          onSubmit={(data) => {
            console.log("Submitted purchase data:", data);
          }}
        />
      )}
    </div>
  );
};

export default RawMaterial;
