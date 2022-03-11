import axios from "axios";
import React from "react";
import { useState } from "react";
import { FormField } from "../../components";
import { Navbar } from "../../components";
import { api } from "../../api";

export const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    price: "",
    nftPicture: "",
  });

  function handleChange(e) {
    if (e.target.files) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      return;
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleUpload(file) {
    try {
        const uploadData = new FormData()
        uploadData.append("nftp", file);

        const response = await api.post("/upload", uploadData);

        return response.data.url;

    }catch (error) {
        console.log(error);
    }

  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

    const pictureURL = await handleUpload(formData.nftPicture)
      const response = await api.post("/create/create-nfts", {...formData, nftPicture: pictureURL});
      console.log(response.data);
    } catch (error) {}
  }

  return (
    <>
      <div className="gradient_bg">
        <Navbar />
        <h1>Add a new NFT</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="title"
            id="createNftFormTitle"
            className="formNft"
            name="title"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />

          <FormField
            label="Description"
            id="createNftFormText"
            className="formNft"
            name="text"
            required={true}
            value={formData.text}
            onChange={handleChange}
          />

          <FormField
            type="number"
            label="price"
            id="createNftFormPrice"
            className="formNft"
            name="price"
            required={true}
            value={formData.price}
            onChange={handleChange}
          />

          <FormField
            type="file"
            label="Photo NFT"
            id="createNftFormPhoto"
            className="formNft"
            name="nftPicture"
            required={true}
            onChange={handleChange}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};
