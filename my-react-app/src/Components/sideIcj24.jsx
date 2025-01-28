import React from "react";

function SubscribeNews24() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  // Generate calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty days for alignment
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="m-6 p-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      {/* Subscribe Section */}
      <h2 className="text-2xl font-bold mb-6">SUBSCRIBE ICJ24</h2>
      <div className="h-1 w-20 bg-red-500 mb-8"></div>
      <form className="flex flex-col gap-6">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
        >
          SUBSCRIBE
        </button>
      </form>

      {/* Calendar Section */}
      <div className="mt-10">
        <div className="bg-red-500 text-white text-center py-3 font-semibold text-lg rounded-t-lg">
          {currentMonth} {currentYear}
        </div>
        <table className="w-full border-collapse border border-gray-300 text-center text-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3">M</th>
              <th className="py-3">T</th>
              <th className="py-3">W</th>
              <th className="py-3">T</th>
              <th className="py-3">F</th>
              <th className="py-3">S</th>
              <th className="py-3">S</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(days.length / 7) }).map((_, weekIndex) => (
              <tr key={weekIndex}>
                {days.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`py-3 ${
                      day === currentDate ? "bg-red-200 font-bold" : ""
                    }`}
                  >
                    {day || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscribeNews24;
