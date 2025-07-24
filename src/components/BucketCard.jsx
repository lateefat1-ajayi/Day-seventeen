const BucketCard = ({ item, onDelete, onToggleComplete }) => {
  return (
    <div
      className={`bg-purple-100 shadow-md p-4 rounded-lg w-64 break-words relative border-l-8 ${
        item.completed ? "border-green-400 opacity-70" : "border-purple-500"
      }`}
    >
      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      <p className="text-xs text-gray-500 mt-2 italic">{item.category}</p>

      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onToggleComplete(item.id)}
          className={`text-xs px-2 py-1 rounded ${
            item.completed
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {item.completed ? "Done" : "Mark"}
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="text-xs px-2 py-1 bg-red-400 text-white rounded"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default BucketCard;
