import { useState } from "react";
import BucketCard from "../components/BucketCard";
import { v4 as uuid } from "uuid";

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddItem = () => {
    if (!title.trim()) return;

    const newItem = {
      id: uuid(),
      title,
      description,
      category,
      completed: false,
    };

    setItems([newItem, ...items]);
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-indigo-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">🎯 Your Bucket List</h2>

      
      <div className="max-w-xl mx-auto mb-8 bg-white shadow-md rounded-lg p-4 space-y-4">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Category (e.g., Travel)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 p-6"
        >
        Add to Bucket List
        </button>
      </div>

      {/* Display Items */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <BucketCard
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          ))
        ) : (
          <p className="text-gray-500">Your bucket list is empty. Start dreaming big!</p>
        )}
      </div>
    </div>
  );
};

export default ListPage;
