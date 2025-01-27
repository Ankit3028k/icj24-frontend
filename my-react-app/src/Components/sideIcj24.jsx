import React from "react";

function SubscribeNews24() {
  return (
    <div className="m-6 p-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      {/* Subscribe Section */}
      <h2 className="text-2xl font-bold mb-6">SUBSCRIBE NEWS24</h2>
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
          July 2017
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-red-200">1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td className="bg-red-200">8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td className="bg-red-200">12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscribeNews24;
