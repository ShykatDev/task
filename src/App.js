// Get the total price, add 15% VAT on following each item's price, and
//  filter item where price is above 50. (Please use ES6 - map,
//  reduce, filter)

import "./App.css";
import logo from "./logo.svg";

function App() {
  const users = [
    { name: "Jhinga", price: 42 },
    { name: "Chichinga ", price: 75 },
    { name: "Fulkopi", price: 56 },
    { name: "Aloo", price: 40 },
    { name: "Toamaatar", price: 120 },
    { name: "Mulo", price: 93 },
    { name: "Karola", price: 98 },
    { name: "Lau", price: 90 },
    { name: "Kumro", price: 35 },
    { name: "Sausha", price: 68 },
    { name: "Pyajj", price: 200 },
  ];

  const newPrice = users.map((user) => user.price + user.price * 0.15);
  console.log(newPrice);

  return (
    <div className="App">
      {/* total price */}
      <div className="TP">
        <h3>
          Total Price:{" "}
          <span style={{ color: "#0081C9" }}>
            {users.reduce((n, user) => (n = n + user.price), 0)}
          </span>
        </h3>
      </div>

      {/* add 15% VAT */}
      <div className="VAT">
        <h3 style={{ color: "#0081C9" }}>Adding VAT with items</h3>
        <table>
          <tr>
          <th style={{ border: "1px solid black", padding: "1rem" }}>
              Name
            </th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Original Price
            </th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              15% VAT
            </th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Total after VAT
            </th>
          </tr>
          <tr>
          <td style={{ border: "1px solid black" }}>
              {users.map((user) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {user.name}
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {users.map((user) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {user.price} /-
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {users.map((user) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    border: "1px solid black",
                    padding: "0.5rem",
                  }}
                >
                  {user.price * 0.15} /-
                </li>
              ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {users.map((user) => (
                <li
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    border: "1px solid black",
                    padding: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {user.price + user.price * 0.15}
                </li>
              ))}
            </td>
          </tr>
        </table>
      </div>

      {/* Filter user */}
      <div className="filter">
        <h3 style={{ color: "#0081C9" }}>Users price is above 50:</h3>
        <table>
          <tr>
            <th style={{ border: "1px solid black", padding: "1rem" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "1rem" }}>
              Price
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>
              {users
                .filter((user) => user.price > 50)
                .map((u) => (
                  <li
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      border: "1px solid black",
                      padding: "0.5rem",
                    }}
                  >
                    {u.name}
                  </li>
                ))}
            </td>
            <td style={{ border: "1px solid black" }}>
              {users
                .filter((user) => user.price > 50)
                .map((u) => (
                  <li
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      border: "1px solid black",
                      padding: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {u.price}
                  </li>
                ))}
            </td>
          </tr>
        </table>
      </div>

      <img src={logo} alt="" className="logo"/>
    </div>
  );
}

export default App;
