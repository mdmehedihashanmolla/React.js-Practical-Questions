import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function ControlleForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg w-80">
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name : </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
