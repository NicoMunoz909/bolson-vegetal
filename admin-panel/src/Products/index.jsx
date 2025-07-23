import "./Products.css";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import EditingModal from "./EditingModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { config } from "../Constants";
import CreateModal from "./CreateModal";
import { FaSearch } from "react-icons/fa";

const Products = ({ token }) => {
  const [editing, setEditing] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const URL = config.url;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [URL]);

  const handleCreate = (e, item) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("price", item.price);
    formData.append("priceType", item.priceType);
    formData.append("category", item.category);
    formData.append("description", item.description);

    if (item.image) {
      formData.append("image", item.image);
    }

    let tagsFlags = {
      oferta: e.target.oferta.checked,
      destacado: e.target.destacado.checked,
    };
    tagsFlags = Object.keys(tagsFlags).filter((key) => tagsFlags[key]);
    let tags = tagsFlags.length > 0 ? tagsFlags : "[]";
    formData.append("tags", tags);

    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((item) => setItems([...items, item]))
      .finally(setCreating(false));
  };

  const handleEdit = (e, item) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("price", item.price);
    formData.append("priceType", item.priceType);
    formData.append("category", item.category);
    formData.append("description", item.description);

    if (item.image) {
      formData.append("image", item.image);
    }

    let tagsFlags = {
      oferta: e.target.oferta.checked,
      destacado: e.target.destacado.checked,
    };
    tagsFlags = Object.keys(tagsFlags).filter((key) => tagsFlags[key]);
    let tags = tagsFlags.length > 0 ? tagsFlags : "[]";
    formData.append("tags", tags);

    fetch(URL + `/${selectedItem.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then(
        setItems(
          items.map((i) => {
            if (i.id === selectedItem.id) {
              return { ...i, ...item, tags };
            } else {
              return i;
            }
          })
        )
      )
      .finally(setEditing(false));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(URL + `/${selectedItem.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(setItems(items.filter((item) => item.id !== selectedItem.id)))
      .finally(setDeleteConfirm(false));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditing(false);
    setCreating(false);
    setDeleteConfirm(false);
  };

  const handleStockSwitch = (e, item) => {
    fetch(URL + `/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ inStock: item.inStock === true ? false : true }),
    }).then(() => {
      item.inStock = item.inStock === true ? false : true;
      e.target.classList.toggle("switchInner__off");
    });
  };

  return (
    <div>
      {creating && (
        <CreateModal onConfirm={handleCreate} onCancel={handleCancel} />
      )}
      {editing && (
        <EditingModal
          item={selectedItem}
          onConfirm={handleEdit}
          onCancel={handleCancel}
        />
      )}
      {deleteConfirm && (
        <DeleteConfirmModal
          item={selectedItem}
          onConfirm={handleDelete}
          onCancel={handleCancel}
        />
      )}
      <div className="backoffice-header">
        <h1 style={{ margin: 0 }}>Gestor de catálogo</h1>
        <div className="searchBar alignCenter">
          <FaSearch />
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button onClick={() => setCreating(true)}>
          <FaPlusCircle />
        </button>
      </div>
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => {
          return (
            <div className="products-itemContainer" key={item.id}>
              <div className="products-itemImgContainer">
                <img src={item.imageUrl} alt="" />
              </div>
              <p>{item.name}</p>
              <p>
                $ {item.price} X {item.priceType}
              </p>
              <div className="products-tags">
                {["oferta", "destacado"].map((tag) => (
                  <label
                    className="products-tags__label"
                    key={tag}
                    style={{ marginRight: "8px" }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        Array.from(item.tags) ? item.tags.includes(tag) : false
                      }
                      readOnly
                    />
                    {tag}
                  </label>
                ))}
              </div>
              <div className="products-itemActions">
                <div>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setEditing(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setDeleteConfirm(true);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <div className="switchContainer">
                  <div className="switchOutter">
                    <div
                      className={
                        "switchInner" +
                        (item.inStock ? " " : " switchInner__off")
                      }
                      onClick={(e) => handleStockSwitch(e, item)}
                    ></div>
                  </div>
                  <p
                    style={{
                      width: "50px",
                      margin: "0px",
                      fontSize: "14px",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    stock
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
