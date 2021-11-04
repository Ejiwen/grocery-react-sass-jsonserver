import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout.js";
import Items from "./Items.js";
import AddItem from "./AddItem.js";

const App = () => (
  <Layout>
    <div className="groceries">
      <AddItem />
      <Items />
    </div>
  </Layout>
);

export default App;
