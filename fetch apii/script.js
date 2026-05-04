fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("productList");

    data.products.forEach(product => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.thumbnail}" width="150"/>
        <hr/>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));