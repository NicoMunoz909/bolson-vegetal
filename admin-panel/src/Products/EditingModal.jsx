import { FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";

const EditingModal = ({ item, onConfirm, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [priceType, setPriceType] = useState(item.priceType);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(null);

  return (
    <div className="products-modal__background">
      <div className="products-modal__container">
        <h2 className="products-modal__header">Editar producto</h2>
        <form
          onSubmit={(e) =>
            onConfirm(e, {
              name,
              price,
              priceType,
              category,
              description,
              image,
            })
          }
        >
          <div className="products-modal__imgContainer">
            <img src={item.imageUrl} alt="" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div className="products-modal__formField">
                <label htmlFor="name">Nombre</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="name">Descripción</label>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="price">Precio</label>
                <div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label style={{ margin: "10px" }} htmlFor="priceType">
                    X
                  </label>
                  <select
                    name="priceType"
                    id="priceType"
                    defaultValue={priceType}
                    onChange={(e) => setPriceType(e.target.value)}
                  >
                    <optgroup>
                      <option value="100G">100G</option>
                      <option value="¼KG">¼KG</option>
                      <option value="½KG">½KG</option>
                      <option value="KG">KG</option>
                      <option value="2KG">2KG</option>
                      <option value="U">U</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="products-modal__formField">
                <label htmlFor="category">Categoria</label>
                <div>
                  <select
                    name="category"
                    id="category"
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <optgroup>
                      <option value="Bolsones">Bolsones</option>
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Dietetica">Dietetica</option>
                      <option value="Congelados">Congelados</option>
                      <option value="Almacen">Almacen</option>
                      <option value="Bebidas">Bebidas</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="products-modal__formField">
                <div>
                  <input
                    type="checkbox"
                    name="oferta"
                    id="oferta"
                    defaultChecked={item.tags.includes("oferta")}
                  />
                  <label htmlFor="oferta">Oferta</label>
                  <input
                    type="checkbox"
                    name="destacado"
                    id="destacado"
                    defaultChecked={item.tags.includes("destacado")}
                  />
                  <label htmlFor="destacado">Destacado</label>
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="file">Imagen</label>
                <input
                  type="file"
                  name="imagen"
                  id="imagen"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button type="submit">
              <FaCheck />
            </button>
            <button onClick={onCancel} style={{ backgroundColor: "red " }}>
              <FaTimes />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditingModal;
