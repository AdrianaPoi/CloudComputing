import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    subs,
    durations,
    skillLevels,
    site,
    //availablePlaceCourse,
   // reservedPlaceCourse,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Skill Level</label>
        <select name="skillLevel" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {skillLevels.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Type</label>
        <select name="type" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          <option value="Free">Free</option>
          <option value="Unfree">Unfree</option>
        </select>
      </div>

      <div className="form-group">
        <label>Duration</label>
        <select
          name="duration"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          {durations.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}
{/* <div className="form-group">
        <label>Available</label>
        <input
          type="number"
          name="availablePlaceCourse"
          className="form-control"
          value={availablePlaceCourse}
          onChange={handleChange}
        />
      </div> */}
<div className="form-group">
        <label>Site</label>
        <input
          type="text"
          name="site"
          className="form-control"
          value={site}
          onChange={handleChange}
        />
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
